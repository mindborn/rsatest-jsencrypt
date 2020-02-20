import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deploy-contract',
  templateUrl: './deploy-contract.component.html',
  styleUrls: ['./deploy-contract.component.css']
})
export class DeployContractComponent implements OnInit {

  public classname='app.blockchain.'

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }



}
