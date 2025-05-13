import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import Movie from './movies/models/movie.model';
import { MoviesModule } from './movies/movies.module';

import Review from '../db/models/review.model';
import User from '../db/models/user.model';
import UserMovieStatus from '../db/models/user-movie-status.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get('DB_DIALECT'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        models: [Movie, Review, User, UserMovieStatus],
      }),
      inject: [ConfigService],
    }),
    MoviesModule,
  ],
})
export class AppModule {}
