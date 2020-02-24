import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-wallet',
  templateUrl: './choose-wallet.component.html',
  styleUrls: ['./choose-wallet.component.css']
})
export class ChooseWalletComponent implements OnInit {

  public publickey;

  constructor() { }

  ngOnInit() {
  }

  public onFileChange(event) {
    console.log(event.target.files[0]);

    const fr = new FileReader();
    fr.onload = (result) => {
      console.log('result', result);
    };
  }
}
