import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-detail-view',
  templateUrl: './issue-detail-view.component.html',
  styleUrls: ['./issue-detail-view.component.css']
})
export class IssueDetailViewComponent implements OnInit {
  @Input() issue: Issue;

  constructor() { }

  ngOnInit() {
  }

}
