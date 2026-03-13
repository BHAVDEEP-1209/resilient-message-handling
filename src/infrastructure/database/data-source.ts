import { ConfigService } from "@nestjs/config";
import { dataSourceOptions } from "orm-config";
import { DataSource } from "typeorm";

require('dotenv').config() // for data-source.ts as DI does not work there

// This is data source file for migrations and seeders
export const dataSource = new DataSource(dataSourceOptions(new ConfigService(), 'data-source file'));