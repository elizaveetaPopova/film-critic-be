import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import User from './user.model';
import Movie from './movie.model';

@Table({
  tableName: 'user_movie_statuses',
  timestamps: true,
  underscored: true,
})
export default class UserMovieStatus extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Movie)
  @Column
  movieId: number;

  @Column({
    allowNull: false,
    defaultValue: 'watching',
    type: DataType.ENUM('want_to_watch', 'watched'),
  })
  status: 'want_to_watch' | 'watched';

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Movie)
  movie: Movie;
}
