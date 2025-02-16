import { Controller, Get } from "@nestjs/common";
import { GetProjectsService } from "./getprojects.service";

@Controller()
export class GetProjectsController {
	constructor(private readonly projectService: GetProjectsService) { }

	@Get("/getprojects/")
	async getReviews() {
		return this.projectService.getProjects();
	}
}