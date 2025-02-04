import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customer } from "../models/customer";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CustomerService{
    
    constructor(private httpClient:HttpClient){ }

    private baseUrl='http://localhost:9292/clove-pro/Customer'

    public getAllCustomer():Observable <Customer[]>{
        return this.httpClient.get<Customer[]>(`${this.baseUrl}`)
    }

    public saveCustomer(customer:Customer):Observable<Customer>{
        return this.httpClient.post<Customer>(`${this.baseUrl}`,customer)
    }
    public deleteCustomer(id:number):Observable <void>{
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }
    public getCustomerById(customerId:number):Observable <Customer>{
      return this.httpClient.get<Customer>(`${this.baseUrl}/${customerId}`)
  }


  public updateCustomer(customerId:number, customer: Customer):Observable <any>{
    return this.httpClient.put<any>(`${this.baseUrl}/${customerId}`, customer);
  }

}