import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibModule } from './library/library.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'moovyreview',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    LibModule,
    ReviewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
