import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewIssueComponent } from './new-issue/new-issue.component';

const routes: Routes = [
  {path: 'issue/new', component: NewIssueComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
