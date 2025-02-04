import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Payment } from "../models/Payment"

@Injectable({
    providedIn: 'root'
  })
  export class PaymentService {
  
    constructor(private httpClinet: HttpClient) { }
  
    private baseUrL = 'http://localhost:9292/clove-pro/Payment'
  
    public getAllPayment():Observable <Payment[]>{
      return this.httpClinet.get<Payment[]>(`${this.baseUrL}`)
    }
  
    public savePayment(payment: Payment): Observable<Payment>{
      return this.httpClinet.post<Payment>(`${this.baseUrL}`, payment)
    }
    public deletePayment(id:number):Observable <void>{
      return this.httpClinet.delete<void>(`${this.baseUrL}/${id}`);
  }
  public getPaymentById(paymentId:number):Observable <Payment>{
        return this.httpClinet.get<Payment>(`${this.baseUrL}/${paymentId}`)
    }
  
  
    public updatePayment(PaymentId:number, Payment: Payment):Observable <any>{
      return this.httpClinet.put<any>(`${this.baseUrL}/${PaymentId}`, Payment);
    }

}
  