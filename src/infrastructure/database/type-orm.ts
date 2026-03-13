import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "orm-config";

@Module({
    imports: [TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => dataSourceOptions(configService, 'NestTypeOrmModule') // this takes config and intializes the dataSource under the hood
    })]
})
export class NestTypeOrmModule { }