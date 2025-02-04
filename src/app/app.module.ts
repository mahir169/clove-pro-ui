import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AuditComponent } from './components/audit/audit.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import { NewAuditComponent } from './components/new-audit/new-audit.component';
import { NewPaymentComponent } from './components/new-payment/new-payment.component';
import { UpdateAuditComponent } from './components/update-audit/update-audit.component';
import { UpdatePaymentComponent } from './components/update-payment/update-payment.component';
import { ViewAuditComponent } from './components/view-audit/view-audit.component';
import { ViewPaymentComponent } from './components/view-payment/view-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CustomerComponent,
    AuditComponent,
    PaymentComponent,
    NewCustomerComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent,
    NewAuditComponent,
    NewPaymentComponent,
    UpdateAuditComponent,
    UpdatePaymentComponent,
    ViewAuditComponent,
    ViewPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
