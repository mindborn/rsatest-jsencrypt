import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseWalletComponent } from './choose-wallet/choose-wallet.component';

const routes: Routes = [
  {
    path: 'choose-wallet', component: ChooseWalletComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
