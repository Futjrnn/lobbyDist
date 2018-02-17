import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit {
  @Input() issue: Issue;

  constructor() { }

  ngOnInit() {
  }

}
