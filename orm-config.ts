import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

type CustomDataSourceOptions = DataSourceOptions & SeederOptions;

export const dataSourceOptions = (configService: ConfigService, parentCallerName: string): CustomDataSourceOptions => {
    console.log('calling dataSourceOptions', parentCallerName);

    return {
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: ['dist/src/domain/**/*entity.js'],
        synchronize: false,
        migrationsTableName: 'migrations',
        migrations: ['dist/src/infrastructure/database/migrations/*.js'],
        seeds: ['dist/src/infrastructure/database/seeders/*.js'],
        seedTracking: true,
    }
}