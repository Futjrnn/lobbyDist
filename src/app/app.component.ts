import { Component, HostListener } from '@angular/core';
import * as _ from 'lodash';
import Web3 from 'web3';
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

  @HostListener('window:load')
  windowLoaded() {
    this.initWeb3();
  }

  initWeb3 = () => {
    window.web3 = _.isUndefined(window.web3) ? new Web3(new Web3.providers.HttpProvider('http://localhost:8545')) : new Web3(window.web3.currentProvider);
  }
}
