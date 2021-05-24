import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());
  constructor() { }

  // tslint:disable-next-line:typedef
  changeMonth(num: number) {
    const value = this.date.value.add(num, 'month');
    this.date.next(value);
  }

  // tslint:disable-next-line:typedef
  selected(day: moment.Moment) {
    const value = this.date.value.set({
      date: day.date(),
      month: day.month()
    });
    this.date.next(value);
  }
}
