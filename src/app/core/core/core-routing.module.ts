import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeePaymentComponent } from './fee-payment/fee-payment.component';
import { FeeStatementComponent } from './fee-statement/fee-statement.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path:'fee-payment', component:FeePaymentComponent},
  {path:'fee-statement', component:FeeStatementComponent},
  {path:'transactions', component:TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
