import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from "./issue";
import { ISSUES } from './mock-issues';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { map } from 'rxjs/operators'


@Injectable()
export class IssueServiceService {
  currentIssue: Issue;
  issues = ISSUES

  constructor(private http: HttpClient) { }

  // viewIssue
    viewIssue(issue: Issue): any {
      // this.observableIssue = new Observable( observer => {
      //   observer.next(issue);
      //   observer.complete();
      // });

      this.currentIssue = issue;

      // this.issue = _issue;
      // public readonly issueObservable: Observable<Issue> = this.issue.asObservable()
      // return issue.asObservable()
    }

  // getIssues
    getIssues() {
      let returnedIssues: Array<Issue> = [];
      this.http.get("/api/issues").subscribe(res => {
      
        _.forEach(res, (issue) => {
          let newIssue: Issue = {
            id: 1,
            title: issue.title,
            description: issue.description
          }
          
          returnedIssues.push(newIssue);
        });
      });

      console.log(returnedIssues);
      return returnedIssues;
    }
  // createIssue
    createIssue(issue: Issue) {
      // send issue to db / blockchain layer
    }
  // supportIssue
    supportIssue(issue: Issue, supportWallet: string, amount: number): boolean {
      // send amount to blockchain in new contract pointing to issue contract
      return true;
    }
  // collectIssue
    collectIssue(issue: Issue, collectWallet: string): boolean {
      // initiates the collection of the bounty, doesn't deliver the reward but just starts the verification process
      return true;
    }
  // closeIssue
    closeIssue(issue: Issue, winnerWallet: string): boolean {
      // actual payout step of the contract. maybe requires some input to note verification consensus.
      return true;
    }
}
