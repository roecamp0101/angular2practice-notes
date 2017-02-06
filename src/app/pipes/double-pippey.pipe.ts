import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doublePippey'
})

export class DoublePippeyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * 3;
  }

}
