import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 0) {
        return value;
    }
    let resultArray = [];
      for(let item of value){
         if(item.match('^.*' + args + '.*$')){
             resultArray.push(item);
         }
      }
      
      return resultArray;
  }

}
