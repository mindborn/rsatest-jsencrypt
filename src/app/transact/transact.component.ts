import { SmartContractContext } from './../smart-contract-context';
import { Wallet } from './../wallet';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent implements OnInit {

  public address: string;
  public type: string;
  public command: string;
  public params: string;

  constructor(private http: HttpClient, private wallet: Wallet) { }

  ngOnInit() {
  }

  public onSend() {
    this.http.post(SmartContractContext.BASE_URL,
      {
        type: this.type,
        command: this.command,
        params: [this.params],
        sender: this.wallet.PUBLIC_KEY,
        contract: SmartContractContext.CONTRACT_ADDRESS
      }).subscribe((response) => {
        console.log(response);
      });
  }

}
