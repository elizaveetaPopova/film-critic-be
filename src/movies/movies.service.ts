import {
  InternalServerErrorException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import Movie from './models/movie.model';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie)
    private readonly moviesRepository: typeof Movie,
  ) {}
  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    try {
      return await this.moviesRepository.create({
        ...createMovieDto,
      });
    } catch (error) {
      console.error('DB error in create:', error);
      throw new InternalServerErrorException('Failed to create movie');
    }
  }

  async findAll(): Promise<Movie[]> {
    try {
      return await this.moviesRepository.findAll({
        attributes: ['id', 'title', 'description', 'year', 'posterUrl'],
      });
    } catch (error) {
      console.error('DB error in findAll:', error);
      throw new InternalServerErrorException('Failed to fetch movies');
    }
  }

  async findOne(id: number): Promise<Movie> {
    const movie = await this.moviesRepository.findByPk(id);
    try {
      if (!movie) {
        throw new NotFoundException('Movie not found');
      }
      return movie;
    } catch (error) {
      console.error('DB error in findOne:', error);
      throw new InternalServerErrorException('Failed to fetch movie');
    }
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    try {
      const [affectedCount, rowsUpdated] = await this.moviesRepository.update(
        updateMovieDto,
        {
          returning: true,
          where: { id },
        },
      );

      if (affectedCount === 0) {
        throw new NotFoundException('Movie not found');
      }

      return rowsUpdated[0];
    } catch (error) {
      console.error('DB error in update:', error);
      throw new InternalServerErrorException('Failed to update movie');
    }
  }

  async remove(id: number): Promise<string> {
    try {
      await this.moviesRepository.destroy({ where: { id } });
      return 'Movie deleted successfully';
    } catch (error) {
      console.error('DB error in remove:', error);
      throw new InternalServerErrorException('Failed to delete movie');
    }
  }
}
