import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './create-song.dto';
import { ExecutionTime } from 'src/ExecutionTime.interceptor';

@Controller('songs')
@UseInterceptors(ExecutionTime)
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songService.create(createSongDTO);
  }

  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createSongDTO: CreateSongDTO) {
    return this.songService.updateOne(Number(id), createSongDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songService.delete(Number(id));
  }
}
