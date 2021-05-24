import { DateService } from './../../services/date.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dateTemp: Moment;
  constructor( public dateService: DateService) { }

  ngOnInit(): void {

  }


  // tslint:disable-next-line:typedef
  go(num: number) {
    this.dateService.changeMonth(num);
  }

}
