import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueServiceService } from './issue-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueCardComponent } from './issue-card/issue-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuesListComponent,
    IssueCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IssueServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
