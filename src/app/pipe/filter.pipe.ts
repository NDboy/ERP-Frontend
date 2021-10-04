import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string[] = []): any {

    if (!Array.isArray(value) || !phrase || !Array.isArray(key)) {
      return value;
    }
     phrase = ('' + phrase).toLowerCase();
     return value.filter( item => {
       const strItem0: string = ('' + item[key[0]]).toLowerCase();
       const strItem1: string = ('' + item[key[1]]).toLowerCase();
       const strItem2: string = ('' + item[key[2]]).toLowerCase();
       return strItem0.includes(phrase) || strItem1.includes(phrase) || strItem2.includes(phrase);
     });

  }

}
