import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Este es un tipo de framework de Node.js';
  }

  @Post()
  postHello(@Body() data: { message: string }): string {
    return `Has enviado: ${data.message}`;
  }
}
