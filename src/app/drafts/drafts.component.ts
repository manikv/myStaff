import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  eventName: string;
  date: string;
  time: string;
  location: string;
  remainder: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {eventName: 'Google Day 1', date: '1/09/2021', time: '08:00 AM - 05:00 PM', location: '2400 Yorkmont road charlotte NC 29217',remainder:'01/09/2021. 8:00 AM'},
  {eventName: 'Google Day 2', date: '1/09/2021', time: '08:00 AM - 05:00 PM', location: '2400 Yorkmont road charlotte NC 29217',remainder:'01/09/2021. 8:00 AM'},
  {eventName: 'Google Day 3', date: '1/09/2021', time: '08:00 AM - 05:00 PM', location: '2400 Yorkmont road charlotte NC 29217',remainder:'01/09/2021. 8:00 AM'},
  {eventName: 'NY Events', date: '1/09/2021', time: '08:00 AM - 05:00 PM', location: '2400 Yorkmont road charlotte NC 29217',remainder:'01/09/2021. 8:00 AM'},
  {eventName: 'NY Event 1', date: '1/09/2021', time: '08:00 AM - 05:00 PM', location: '2400 Yorkmont road charlotte NC 29217',remainder:'01/09/2021. 8:00 AM'},
];

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Event Name', 'Date', 'Time', 'Location','Remainder','Action'];
  dataSource = ELEMENT_DATA;

}
