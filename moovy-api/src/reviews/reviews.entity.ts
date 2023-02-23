import { LibEntity } from 'src/library/library.entity';
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ReviewsEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'reviewId',
  })
  id: number;

  @Column({
    nullable: false,
  })
  review: string;

  @Column({
    nullable: false,
  })
  movieImdbId: string;
}
