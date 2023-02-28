import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LibEntity } from './library.entity';
import { NewLibDTO } from 'src/dto/new_library_dto';

@Injectable()
export class LibService {
  constructor(
    @InjectRepository(LibEntity)
    private readonly libRepository: Repository<LibEntity>,
  ) {}
  create(newLibDTO: NewLibDTO) {
    return this.libRepository.save(newLibDTO);
  }

  findAll() {
    return this.libRepository.find();
  }

  remove(imdbId: string) {
    return this.libRepository.delete(imdbId);
  }
}
