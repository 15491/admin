import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    NestJwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('token_secret'),
        signOptions: {
          expiresIn: config.get('token_expiresIn'),
        },
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class JwtModule {}
