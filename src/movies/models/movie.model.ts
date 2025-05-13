import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';

import Review from '../../../db/models/review.model';
import UserMovieStatus from '../../../db/models/user-movie-status.model';

@Table({
  tableName: 'movies',
  timestamps: true,
  underscored: true,
})
export default class Movie extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.INTEGER)
  year: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  posterUrl: string;

  @HasMany(() => Review)
  reviews: Review[];

  @HasMany(() => UserMovieStatus)
  movieStatuses: UserMovieStatus[];
}
