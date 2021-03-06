import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RsaTestComponent } from './rsa-test/rsa-test.component';
import { DeployContractComponent } from './deploy-contract/deploy-contract.component';
import { ChooseWalletComponent } from './choose-wallet/choose-wallet.component';
import { TransactComponent } from './transact/transact.component';
import { Wallet } from './wallet';

@NgModule({
  declarations: [
    AppComponent,
    RsaTestComponent,
    DeployContractComponent,
    ChooseWalletComponent,
    TransactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ Wallet ],
  bootstrap: [AppComponent]
})
export class AppModule { }
