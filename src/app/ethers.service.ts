import { Injectable, OnInit } from "@angular/core";
import { ethers } from "ethers";

@Injectable({
  providedIn: "root",
})
export class EthersService implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  // The "any" network will allow spontaneous network changes
  provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");

  async connect() {
    // MetaMask requires requesting permission to connect users accounts
    await this.provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = this.provider.getSigner();
  }
}
