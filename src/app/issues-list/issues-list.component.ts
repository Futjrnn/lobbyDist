import { Component, OnInit } from '@angular/core';
import { IssueServiceService } from '../issue-service.service';
import { Issue } from '../issue';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  issues: Issue[]

  constructor(public issueService: IssueServiceService) { }

  ngOnInit() {
    this.issues = this.issueService.getIssues();
  }

  onSelect(issue) {
    this.issueService.viewIssue(issue);
  }
}
