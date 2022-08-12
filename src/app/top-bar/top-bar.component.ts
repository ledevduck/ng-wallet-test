import { Component, OnInit } from "@angular/core";

import { EthersService } from "../ethers.service";
@Component({
  selector: "app-top-bar",
  templateUrl: "top-bar.component.html",
  styles: [],
})
export class TopBarComponent implements OnInit {
  constructor(private ethersService: EthersService) {}

  ngOnInit(): void {}

  connect() {
    this.ethersService.connect();
  }
}
