import { Injectable } from '@nestjs/common';
import {
  findFirstKeyWithOneValue,
  findFirstUniqueLetter,
  removeNonLetterKeys,
} from './utils/utils-algorythm-functions';

@Injectable()
export class AlgService {
  public static getUnique(text) {
    const splitedText = text.split(' ');
    const dictionary = {};

    for (const word of splitedText) {
      const currentWord = dictionary[findFirstUniqueLetter(word)];

      dictionary[findFirstUniqueLetter(word)] = (currentWord || 0) + 1;
    }

    removeNonLetterKeys(dictionary);

    const firstUniqueKey = findFirstKeyWithOneValue(dictionary);
    return firstUniqueKey || null;
  }
}
