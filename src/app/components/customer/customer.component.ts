import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/CustomerService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: false,
  
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  customer!: Customer[]
  constructor(private customerService:CustomerService,private router:Router){}
  ngOnInit(): void {
    this.listOfCustomers()
  }
  listOfCustomers(){
    this.customerService.getAllCustomer().subscribe(data=>{
      console.log(data)
      this.customer= data
    },error=>console.log(error))
  }
  addCustomer(){
    this.router.navigateByUrl("/newCustomer")
  
  }
  onDeleteCustomer(customerId: number){
    this.customerService.deleteCustomer(customerId).subscribe( (data: any)=>{
      this.listOfCustomers();
      console.log(data)
    })

  }

  onViewCustomer(customerId:number){
    this.router.navigate(['/view-customer', customerId])

  }
  updtCustomer(customerId:number){
    this.router.navigate(['/update-customer', customerId])
  }
}
