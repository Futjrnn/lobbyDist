import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue';
import { IssueServiceService } from '../issue-service.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-issue-detail-view',
  templateUrl: './issue-detail-view.component.html',
  styleUrls: ['./issue-detail-view.component.css']
})
export class IssueDetailViewComponent implements OnInit {
  // @Input() issue: Issue;
  private issue: Issue;

  constructor(public issueService: IssueServiceService) { }

  ngOnInit() {
    this.issue = this.issueService.currentIssue;
  }

}
