import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";
import { DiscordUser } from "src/types";

@Injectable()
export class AvatarService {
	constructor(private config: ConfigService) { }
	private cachedUsers: {
		[id: string]: {
			user: DiscordUser;
			date: Date;
		}
	} = {};

	async fetchUser(id: string): Promise<DiscordUser> {
		const cached = this.cachedUsers[id];
		if (cached && new Date().getTime() - cached.date.getTime() < 1000 * 60 * 60) return cached.user;

		const { data } = await axios.get(`https://discord.com/api/v9/users/${id}/profile?with_mutual_guilds=false&with_mutual_friends=false&with_mutual_friends_count=false`, {
			headers: {
				Authorization: this.config.get("DC_TOKEN")
			}
		});
		this.cachedUsers[id] = {
			user: data.user,
			date: new Date()
		};

		return data.user;
	}
	async getAvatar(userid: string): Promise<string> {
		try {
			const user = await this.fetchUser(userid);
			return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size4096`;
		} catch (e) {
			throw e;
		}
	}
}
