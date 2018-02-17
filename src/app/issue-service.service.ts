import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Issue } from "./issue";
import { ISSUES } from './mock-issues';


@Injectable()
export class IssueServiceService {

  issues = ISSUES

  constructor() { }

  // getIssues
    getIssues(): Issue[] {
      return ISSUES;
    }
  // createIssue

  // supportIssue

  // collectIssue

  // closeIssue

}
