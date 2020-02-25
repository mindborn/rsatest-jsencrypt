import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseWalletComponent } from './choose-wallet/choose-wallet.component';
import { DeployContractComponent } from './deploy-contract/deploy-contract.component';

const routes: Routes = [
  {
    path: 'choose-wallet', component: ChooseWalletComponent
  },
  {
    path: 'deploy-contract', component: DeployContractComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
