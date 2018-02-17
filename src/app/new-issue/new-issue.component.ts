import { Component, OnInit } from '@angular/core';
import { IssueServiceService } from '../issue-service.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  constructor(public issueService: IssueServiceService) { }

  ngOnInit() {
    
  }

  createIssue(issue: Issue): void {
    this.issueService.createIssue(issue);
  }

}
