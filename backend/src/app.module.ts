import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { PrismaModule } from "./prisma/prisma.module";
import { AvatarModule } from "./endpoints/avatar/avatar.module";
import { GetProjectsModule } from "./endpoints/getprojects/getprojects.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: process.env["CLIENT_PATH"] || join(__dirname, "..", "..", "frontend", "dist"),
            exclude: ["/api/(.*)"],
        }),
        GetProjectsModule,
        AvatarModule,
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule
    ]
})
export class AppModule { }