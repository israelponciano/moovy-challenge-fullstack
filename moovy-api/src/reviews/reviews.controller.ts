import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NewReviewsDTO } from 'src/dto/new_reviews_dto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}
  @Post('new')
  create(@Body() newReviewsDTO: NewReviewsDTO) {
    return this.reviewsService.create(newReviewsDTO);
  }

  @Get('get')
  findAll() {
    return this.reviewsService.findAll();
  }

  @Delete('del/:id')
  remove(@Param('id') id: number) {
    return this.reviewsService.remove(id);
  }
}
