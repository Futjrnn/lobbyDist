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
  private web3: any;

  constructor(public issueService: IssueServiceService) { }

  ngOnInit() {
    this.issue = this.issueService.currentIssue;
    this.web3 = window.web3;
  }

  supportIssue(issue: Issue) {

  	//let toAddress = issue.address;
  	var amount = this.web3.toWei(0.01, "ether")

  	let transactionObject = {};
  	transactionObject.to = "0x156d7a972B64C8d3e0454277244BfeaAAE15D201";
  	transactionObject.value = amount;
  	transactionObject.gas = 21000;

  	this.web3.eth.sendTransaction(transactionObject, function(err, transactionHash) {
  		if (!err) console.log(transactionHash); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
	  });
  }
}
