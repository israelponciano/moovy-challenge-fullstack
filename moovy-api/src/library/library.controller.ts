import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NewLibDTO } from 'src/dto/new_library_dto';
import { LibService } from './library.service';

@Controller('lib')
export class LibController {
  constructor(private readonly libService: LibService) {}
  @Post('new')
  create(@Body() newLibDTO: NewLibDTO) {
    return this.libService.create(newLibDTO);
  }

  @Get('get')
  findAll() {
    return this.libService.findAll();
  }

  @Delete('del/:id')
  remove(@Param('id') id: number) {
    return this.libService.remove(id);
  }
}
