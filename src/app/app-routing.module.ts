import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeePaymentComponent } from './core/core/fee-payment/fee-payment.component';
import { FeeStatementComponent } from './core/core/fee-statement/fee-statement.component';
import { FeeStructureComponent } from './core/core/fee-structure/fee-structure.component';
import { ReceiptComponent } from './core/core/receipt/receipt.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { RegisterComponent } from './shared/auth/register/register.component';
import { HomeComponent } from './shared/layout/home/home.component';
import { LandingpageComponent } from './shared/layout/landingpage/landingpage.component';



const routes: Routes = [
  {path:'',pathMatch: 'full', redirectTo:'/home'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'fee-payment', component:FeePaymentComponent},
  {path:'fee-statement', component:FeeStatementComponent},
  {path:'fee-structure', component:FeeStructureComponent},
  {path:'receipt', component:ReceiptComponent},
  {path:'landingpage', component:LandingpageComponent},
  {path:'shared', loadChildren: () => import('./shared/layout/layout.module').then(m => m.LayoutModule)},
  {path:'shared', loadChildren: () => import('./shared/auth/auth.module').then(m => m.AuthModule) },
  {path:'core', loadChildren: () => import('./core/core/core.module').then(m => m.CoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
