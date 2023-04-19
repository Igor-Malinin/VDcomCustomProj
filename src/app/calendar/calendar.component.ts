import { Component } from '@angular/core'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  private day = new Date().getDay()
  private date = new Date().getDate()
  private dayNames = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
  private month = new Date().getMonth()
  private monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
  private year = new Date().getFullYear()

  constructor() {
  }

  getDayName() {
    return this.dayNames[this.day-1]
  }

  getDate() {
    return this.date
  }

  getMonthName() {
    return this.monthNames[this.month]
  }

  getYear () {
    return this.year
  }
}
