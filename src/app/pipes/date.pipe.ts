import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat',
  pure: false
})
export class DatePipe implements PipeTransform {

  transform(value: moment.Moment, format: string = 'MMMM YYYY'): string {
    return value.format(format);
  }

}
