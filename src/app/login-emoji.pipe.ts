import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loginEmoji',
  standalone: true
})
export class LoginEmojiPipe implements PipeTransform {

  transform(value: Date): string {
    const x = (Date.now()-value.getTime()) / (1000 * 60 * 60 * 24)

    if(x > 90){
      return '\u{1F47B}'
    }
    else if( x > 30 && x < 90){
      return '\u{1F9A5}'
    }
    else if(x > 7 && x < 30){
      return '\u{1F4A4}'
    }
    else {
      return '\u{1F525}'
    }
  }
}
