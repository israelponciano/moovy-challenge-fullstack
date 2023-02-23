import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'moovyreview',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
