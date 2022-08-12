import { Component, OnInit } from "@angular/core";

import { EthersService } from "../ethers.service";
@Component({
  selector: "app-top-bar",
  templateUrl: "top-bar.component.html",
  styles: [],
})
export class TopBarComponent implements OnInit {
  constructor(private ethersService: EthersService) {}

  ngOnInit(): void {
    // Force page refreshes on network changes
    this.ethersService.provider.on("network", (newNetwork, oldNetwork) => {
      // When a Provider makes its initial connection, it emits a "network"
      // event with a null oldNetwork along with the newNetwork. So, if the
      // oldNetwork exists, it represents a changing network
      if (oldNetwork) {
        window.location.reload();
      }
    });
  }

  connect() {
    this.ethersService.connect();
  }
}
