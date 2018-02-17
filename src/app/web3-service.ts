import { Injectable } from '@angular/core';

declare global {
  interface Window { web3: any }
}

window.web3 = window.web3 || {};

@Injectable()
export class Web3Service {
  web3: any;

  constructor() {
    this.web3 = window.web3;
  }

  getWeb3() {
    return this.web3;
  }
}

