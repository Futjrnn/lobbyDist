import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewIssueComponent } from './new-issue/new-issue.component';
import { IssueDetailViewComponent } from './issue-detail-view/issue-detail-view.component'
import { IssuesListComponent } from './issues-list/issues-list.component';

const routes: Routes = [
  {path: '', component: IssuesListComponent},
  {path: 'issue/new', component: NewIssueComponent},
  {path: 'issue/view/:id', component: IssueDetailViewComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
