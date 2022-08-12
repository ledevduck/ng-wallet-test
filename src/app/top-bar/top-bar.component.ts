import { Component, OnInit } from "@angular/core";

import { ethers } from "ethers";

@Component({
  selector: "app-top-bar",
  templateUrl: "top-bar.component.html",
  styles: [],
})
export class TopBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Force page refreshes on network changes
    this.provider.on("network", (newNetwork, oldNetwork) => {
      // When a Provider makes its initial connection, it emits a "network"
      // event with a null oldNetwork along with the newNetwork. So, if the
      // oldNetwork exists, it represents a changing network
      if (oldNetwork) {
        window.location.reload();
      }
    });
  }

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
