import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RsaTestComponent } from './rsa-test/rsa-test.component';
import { DeployContractComponent } from './deploy-contract/deploy-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    RsaTestComponent,
    DeployContractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
