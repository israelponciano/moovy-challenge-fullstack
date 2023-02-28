import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class LibEntity {
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

  @PrimaryColumn({
    nullable: false,
  })
  imdbId: string;
}
