export interface DiscordUser {
    id: string;
    username: string;
    global_name: string;
    avatar: string;
    avatar_decoration_data: {
        asset: string;
        sku_id: string;
    };
    discriminator: string;
    public_flags: number;
    clan: unknown;
    flags: number;
    banner: string;
    banner_color: string;
    accent_color: number;
    bio: string;
}