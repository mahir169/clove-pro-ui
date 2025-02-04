import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/Payment';
import { PaymentService } from '../../services/PaymentService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-payment',
  standalone: false,
  
  templateUrl: './new-payment.component.html',
  styleUrl: './new-payment.component.css'
})
export class NewPaymentComponent implements OnInit {
  payment: Payment = new Payment()
  constructor(private newPayment: PaymentService,private router:Router){}
  ngOnInit(): void {
    
  }
  onSubmit(){
    this.newPayment.savePayment(this.payment).subscribe(data =>{
      console.log(data)
    })
    this.router.navigate(['/payment'])
  }

}