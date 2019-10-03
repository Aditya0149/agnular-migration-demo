import { Pipe, PipeTransform } from '@angular/core';
import { cloudlexUpperCase } from '../utils/pipe-utils';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return cloudlexUpperCase(value);
  }

}
