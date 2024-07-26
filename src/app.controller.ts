import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { badWordsDTO } from './badwords.dto';

@Controller('/badwords')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/remove')
  removeBadWords(@Body() sentence: badWordsDTO) {
    const { message } = sentence;
    return this.appService.removeBadWords(message);
  }
}
