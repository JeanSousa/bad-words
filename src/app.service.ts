import { Injectable } from '@nestjs/common';
import BadWordsFilter from 'bad-words';
import { badWords } from './badwords.filter';
// import badWords from 'badwords-list';

@Injectable()
export class AppService {
  removeBadWords(message: string) {
    const filter = new BadWordsFilter();

    filter.addWords(...badWords);

    return {
      BeforeTransformation: message,
      AfterTransformation: filter.clean(message),
    };
  }
}
