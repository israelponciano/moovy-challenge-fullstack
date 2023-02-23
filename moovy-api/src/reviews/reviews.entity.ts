import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  imdbId: string;
}
