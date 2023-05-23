import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AaService } from './aa.service';
import { CreateAaDto } from './dto/create-aa.dto';
import { UpdateAaDto } from './dto/update-aa.dto';

@Controller('aa')
export class AaController {
  constructor(private readonly aaService: AaService) {}

  @Post()
  create(@Body() createAaDto: CreateAaDto) {
    return this.aaService.create(createAaDto);
  }

  @Get()
  findAll() {
    return this.aaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAaDto: UpdateAaDto) {
    return this.aaService.update(+id, updateAaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aaService.remove(+id);
  }
}
