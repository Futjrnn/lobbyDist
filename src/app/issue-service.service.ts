import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from "./issue";
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class IssueServiceService {
  currentIssue: Issue;

  constructor(private http: HttpClient) { }

  // viewIssue
    viewIssue(issue: Issue): any {
      this.currentIssue = issue;
    }

  // getIssues
    getIssues() {
      let returnedIssues: Array<Issue> = [];
      this.http.get("/api/issues").subscribe(res => {
      
        _.forEach(res, (issue: any) => {
          let newIssue: Issue = {
            id: 1,
            title: issue.title,
            description: issue.description,
            hash: issue.hash
          }
          
          returnedIssues.push(newIssue);
        });
      });

      return returnedIssues;
    }
  // createIssue
    createIssue(issue: Issue) {
      // send issue to db / blockchain layer
      this.http.post("/api/issues/add", issue).subscribe(res => {
        console.log(res);
      })
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
