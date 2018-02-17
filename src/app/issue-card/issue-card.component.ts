import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

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
