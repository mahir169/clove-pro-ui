import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/Payment';
import { PaymentService } from '../../services/PaymentService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: false,
  
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  payment!:Payment[]

  constructor(private paymentService:PaymentService,private router:Router){}
  ngOnInit(): void {
      this.listOfPayments()
  }
  listOfPayments(){
    this.paymentService.getAllPayment().subscribe(data =>{
      console.log(data)
      this.payment= data
    },error => console.log(error))
  }
  addPayment(){
    this.router.navigate(['/newPayment'])
  }
  deletePayment(paymentId:number){
    this.paymentService.deletePayment(paymentId).subscribe( (data: any)=>{
      this.listOfPayments();
      console.log(data)
    })
    
  }

  viewPayment(paymentId:number){
    this.router.navigate(['/view-payment', paymentId])

  }
  updatePayment(paymentId:number){
    this.router.navigate(['/update-payment', paymentId])
  }
}
  
