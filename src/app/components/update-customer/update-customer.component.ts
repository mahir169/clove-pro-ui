import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/CustomerService';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-update-customer',
  standalone: false,
  
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{
  customer: Customer = new Customer(); // Initialize a new customer object
  customerId!: number;

  constructor(private customerService: CustomerService, private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId']; 
    this.getCustomerById(this.customerId); 
  }


  getCustomerById(id: number): void {
    this.customerService.getCustomerById(id).subscribe(
      (data) => {
        this.customer = data; 
      },

      (error) => {
        console.error('Error fetching customer data', error); 
      }
    );

  }


  updateById(): void {
    this.customerService.updateCustomer(this.customerId, this.customer).subscribe(
      (data) => {
        console.log('Customer updated successfully', data);
      },
      (error) => {
        console.error('Error updating customer', error); 
      }
      
    );
    this.router.navigate(["/customer"])
  }
}
