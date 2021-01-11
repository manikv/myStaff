import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  associateName: string;
  eventName: string;
  eventDate: string;
  taskName: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {associateName: 'ANGULO, MARITZA(86566)', eventName: 'Academy Awards Day 1', eventDate: '01/09/2021', taskName: 'Bar Captain',status:'Accepted'},
  {associateName: 'ANGULO, MARITZA(86566)', eventName: 'Academy Awards Day 1', eventDate: '01/09/2021', taskName: 'Bar Captain',status:'Accepted'},
  {associateName: 'ANGULO, MARITZA(86566)', eventName: 'Academy Awards Day 1', eventDate: '01/09/2021', taskName: 'Bar Captain',status:'Accepted'},
  {associateName: 'ANGULO, MARITZA(86566)', eventName: 'Academy Awards Day 1', eventDate: '01/09/2021', taskName: 'Bar Captain',status:'Accepted'},
  {associateName: 'ANGULO, MARITZA(86566)', eventName: 'Academy Awards Day 1', eventDate: '01/09/2021', taskName: 'Bar Captain',status:'Accepted'},
];

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Associate Name', 'Event Name', 'Event Date', 'Task Name','Status','Action'];
  dataSource = ELEMENT_DATA;

}
