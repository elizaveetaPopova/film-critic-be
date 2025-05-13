import {
  Table,
  Column,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import User from './user.model';
import Movie from '../../src/movies/models/movie.model';

@Table({
  tableName: 'reviews',
  timestamps: true,
  underscored: true,
})
export default class Review extends Model {
  @Column(DataType.STRING)
  text: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 1,
  })
  rating: number;

  @ForeignKey(() => Movie)
  movieId: number;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => Movie)
  movie: Movie;

  @BelongsTo(() => User)
  user: User;
}
