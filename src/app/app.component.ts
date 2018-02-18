import { Component, HostListener } from '@angular/core';
import * as _ from 'lodash';
import * as Web3 from 'web3';
import { Issue } from './issue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lobbyDist';
  web3: any;
  selectedIssue: Issue;

  constructor() { let web3; }

  @HostListener('window:load')
  windowLoaded() {
    this.initWeb3();
  }

  initWeb3 = () => {
    this.web3 = new Web3(window.web3.currentProvider || "ws://localhost:8546");
    this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
  }
}
