
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {CrudtestService} from './crudtest.service';
import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'UIPractice';
  modalRef: BsModalRef;
  notificationAlertStatus:boolean=false;

  constructor(private modalService: BsModalService, public crudtestService: CrudtestService) { }
  ngOnInit(){
    // this.crudtestService.hello().subscribe((data:any)=>{
    //   console.log(data);
    // })  

    }


    openAlertModal() {
      this.notificationAlertStatus=true;
    }

}
