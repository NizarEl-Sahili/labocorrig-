import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'special',
  standalone: true
})
export class SpecialPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let x : any = value;
    x = x.toLowerCase();
    for(let i = 0; i < x.length; i++){
      if(i % 2 == 1){
        x = x.substring(0, i) + x.charAt(i).toUpperCase() + x.substring(i + 1);
      }
    }
    return x;
  }

}
