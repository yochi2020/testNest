import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}
  @Get()
  async getHello() {
    console.log(this.configService.get('PORT'));
    return await this.configService.get('PORT');
  }
}
