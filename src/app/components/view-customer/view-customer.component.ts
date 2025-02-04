import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/CustomerService';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-view-customer',
  standalone: false,
  
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent implements OnInit{
  customer: Customer = new Customer
  customerId!: number
  constructor(private customerService:CustomerService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId']
    this.viewCustomer()
    }

    viewCustomer(){
      this.customerService.getCustomerById(this.customerId).subscribe(data =>{
        console.log(data)
        this.customer = data
      })
    }

}
