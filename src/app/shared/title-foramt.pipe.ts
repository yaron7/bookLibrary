import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleForamt'
})
export class TitleForamtPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let cleanStr = value.replace(/[^\w\s]/gi, '');
    let newStr = cleanStr.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    return newStr;
  }

}
