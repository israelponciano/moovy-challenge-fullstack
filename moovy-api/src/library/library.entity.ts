import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LibEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'movieId',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  movieName: string;

  @Column({
    nullable: false,
    default: '',
  })
  moviePoster: string;

  @Column({
    nullable: false,
    default: '',
  })
  movieYear: string;

  @Column({
    nullable: false,
  })
  imdbId: string;
}
