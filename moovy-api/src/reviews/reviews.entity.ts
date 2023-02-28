import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ReviewsEntity {
  @Column({
    nullable: false,
  })
  review: string;

  @PrimaryColumn({
    nullable: false,
  })
  imdbId: string;
}
