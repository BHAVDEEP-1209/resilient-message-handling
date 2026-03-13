import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NestTypeOrmModule } from './infrastructure/database/type-orm';
import { UserModule } from './feature/user.module';

// Making the Config Module registered globally

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), NestTypeOrmModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
