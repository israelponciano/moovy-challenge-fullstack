import { ReviewsEntity } from 'src/reviews/reviews.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToOne(() => ReviewsEntity, (user: ReviewsEntity) => user.movie)
  public review: ReviewsEntity;
}
