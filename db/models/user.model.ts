import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

import Review from './review.model';
import UserMovieStatus from './user-movie-status.model';

@Table({
  tableName: 'users',
  timestamps: true,
  underscored: true,
})
export default class User extends Model {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM('admin', 'user', 'moderator'),
    defaultValue: 'user',
  })
  role: string;

  @HasMany(() => Review)
  reviews: Review[];

  @HasMany(() => UserMovieStatus)
  movieStatuses: UserMovieStatus[];
}
