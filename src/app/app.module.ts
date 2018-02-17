import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';

import { AppComponent } from './app.component';
import { IssueServiceService } from './issue-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { IssueCardComponent } from './issue-card/issue-card.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { IssueDetailViewComponent } from './issue-detail-view/issue-detail-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuesListComponent,
    IssueCardComponent,
    NewIssueComponent,
    IssueDetailViewComponent
  ],
  imports: [
    BrowserModule,
    NgSemanticModule
  ],
  providers: [IssueServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
