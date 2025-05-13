import { IsNotEmpty, IsString, Length, IsNumber, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString()
  @Length(1, 255, { message: 'Title must be between 1 and 255 characters' })
  title: string;

  @IsNotEmpty({ message: 'Description is required' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'Year is required' })
  @IsNumber()
  year: number;

  @IsNotEmpty({ message: 'Poster URL is required' })
  @IsUrl({}, { message: 'Poster URL must be a valid URL' })
  posterUrl: string;
}
