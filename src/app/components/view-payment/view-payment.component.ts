import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/Payment';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../services/PaymentService';

@Component({
  selector: 'app-view-payment',
  standalone: false,
  
  templateUrl: './view-payment.component.html',
  styleUrl: './view-payment.component.css'
})
export class ViewPaymentComponent implements OnInit{
  payment: Payment = new Payment
  paymentId!: number
  constructor(private paymentService:PaymentService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.paymentId = this.route.snapshot.params['paymentId']
    this.viewPayment()
    }

    viewPayment(){
      this.paymentService.getPaymentById(this.paymentId).subscribe(data =>{
        console.log(data)
        this.payment = data
      })
    }
}
