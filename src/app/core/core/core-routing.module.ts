import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeePaymentComponent } from './fee-payment/fee-payment.component';
import { FeeStatementComponent } from './fee-statement/fee-statement.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
  {path:'fee-payment', component:FeePaymentComponent},
  {path:'fee-statement', component:FeeStatementComponent},
  {path:'fee-structure', component:FeeStructureComponent},
  {path:'receipt', component:ReceiptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
