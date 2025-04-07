import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['src/env/.env'],
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
