import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/CustomerService';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  standalone: false,
  
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {
  customer: Customer = new Customer()
  constructor(private newCustomer: CustomerService,private router:Router){}
  ngOnInit(): void {
    
  }
  onSubmit(){
    this.newCustomer.saveCustomer(this.customer).subscribe(data =>{
      console.log(data)
    })
    this.router.navigate(['/customer'])
  }

}
