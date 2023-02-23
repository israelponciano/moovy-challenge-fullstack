import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibEntity } from './library.entity';
import { LibController } from './library.controller';
import { LibService } from './library.service';

@Module({
  imports: [TypeOrmModule.forFeature([LibEntity])],
  controllers: [LibController],
  providers: [LibService],
})
export class LibModule {}
