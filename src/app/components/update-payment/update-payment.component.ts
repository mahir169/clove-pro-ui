import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/Payment';
import { PaymentService } from '../../services/PaymentService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-payment',
  standalone: false,
  
  templateUrl: './update-payment.component.html',
  styleUrl: './update-payment.component.css'
})
export class UpdatePaymentComponent implements OnInit{
  payment: Payment = new Payment(); 
  paymentId!: number;

  constructor(private paymentService: PaymentService, private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.paymentId = this.route.snapshot.params['paymentId']; 
    this.getpaymentById(this.paymentId); 
  }


  getpaymentById(id: number): void {
    this.paymentService.getPaymentById(id).subscribe(
      (data) => {
        this.payment = data; 
      },

      (error) => {
        console.error('Error fetching payment data', error); 
      }
    );


  }

  submitPayment(): void {
    this.paymentService.updatePayment(this.paymentId, this.payment).subscribe(
      (data) => {
        console.log('payment updated successfully', data);
      },
      (error) => {
        console.error('Error updating payment', error); 
      }
      
    );
    this.router.navigate(["/payment"])
  }

}

