import { Injectable } from '@nestjs/common';
import { ReviewsEntity } from './reviews.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NewReviewsDTO } from 'src/dto/new_reviews_dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(ReviewsEntity)
    private readonly reviewsRepository: Repository<ReviewsEntity>,
  ) {}
  create(newReviewsDTO: NewReviewsDTO) {
    return this.reviewsRepository.save(newReviewsDTO);
  }

  remove(imdbId: string) {
    return this.reviewsRepository.delete(imdbId);
  }

  findBy(imdbId: string) {
    return this.reviewsRepository.findOneBy({ imdbId: imdbId });
  }
}
