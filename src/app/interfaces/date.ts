import * as moment from 'moment';

export interface Day {
  value: moment.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}

export interface Weeks {
  days: Day[];
}
