import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AuditComponent } from './components/audit/audit.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { NewAuditComponent } from './components/new-audit/new-audit.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';
import { UpdateAuditComponent } from './components/update-audit/update-audit.component';
import { ViewAuditComponent } from './components/view-audit/view-audit.component';
import { ViewPaymentComponent } from './components/view-payment/view-payment.component';

const routes: Routes = [
  {path:"",component:HeaderComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"customer",component:CustomerComponent},
      {path:"audit",component:AuditComponent},
      {path:"payment",component:PaymentComponent},
      {path:"newCustomer",component:NewCustomerComponent},
      {path:"newAudit",component:NewAuditComponent},
      {path:"newPayment",component:NewPaymentComponent},
      {path:'update-customer/:customerId',component:UpdateCustomerComponent},
      {path:'update-audit/:auditId',component:UpdateAuditComponent},
      {path:'update-payment/:paymentId',component:UpdateAuditComponent}
    ]
  },
  {path: 'view-customer/:customerId',component:ViewCustomerComponent},
  {path:'view-audit/:auditId',component:ViewAuditComponent},
  {path:'view-payment/:paymentId',component:ViewPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
