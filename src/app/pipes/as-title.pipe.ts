import { Pipe, PipeTransform } from '@angular/core';
/*
 * Makes text into title
 * Takes a string argument eg: fox-news and returns Fox News.
 * Usage:
 *   text | asTitle
*/
@Pipe({ name: 'asTitle' })
export class AsTitlePipe implements PipeTransform {
  constructor() {}

  private specialCases: { [key: string]: string } = {
    bbc: 'BBC',
    abc: 'ABC',
    cnbc: 'CNBC',
    cnn: 'CNN',
    espn: 'ESPN',
    ign: 'IGN',
    mtv: 'MTV',
    nfl: 'NFL',
    t3n: 'T3N',
    usa: 'USA',
    uk: 'UK'
  };

  transform(text: string): string {
    return text
      .split('-')
      .map(word => {
        if (word in this.specialCases) {
          return this.specialCases[word];
        }
        const [firstLetter, ...rest] = word.split('');
        return firstLetter.toUpperCase() + rest.join('');
      })
      .join(' ');
  }
}
