import { DateService } from './../../services/date.service';
import { Weeks } from './../../interfaces/date';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: Weeks[];

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.date.subscribe(val => {
      const startDay = val.clone().startOf('month').startOf('week');
      const endDay = val.clone().endOf('month').endOf('week');
      const date = startDay.clone().subtract(1, 'day');
      const calendar = [];

      while (date.isBefore(endDay, 'day')) {
        calendar.push({
          days: Array(7).fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone();
            const active = moment().isSame(value, 'date');
            const disabled = !val.isSame(value, 'month');
            const selected = val.isSame(value, 'date');

            return { value, active, disabled, selected };
          })
        });
      }
      this.calendar = calendar;

    });
  }

  // tslint:disable-next-line:typedef
  select(day: moment.Moment) {
    this.dateService.selected(day);
  }

}
