import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule }    from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NotificationAlertComponent } from './notification-alert/notification-alert.component';
import { DraftsComponent } from './drafts/drafts.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NotificationAlertComponent,
    DraftsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
