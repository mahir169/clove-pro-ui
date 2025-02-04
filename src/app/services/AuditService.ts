import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Audit } from "../models/Audit"

@Injectable({
    providedIn: 'root'
  })
  export class AuditService {
  
    constructor(private httpClinet: HttpClient) { }
  
    private baseUrL = 'http://localhost:9292/clove-pro/Audit'
  
    public getAllAudit():Observable <Audit[]>{
      return this.httpClinet.get<Audit[]>(`${this.baseUrL}`)
    }
  
    public saveAudit(audit: Audit): Observable<Audit>{
      return this.httpClinet.post<Audit>(`${this.baseUrL}`, audit)
    }
    public deleteAudit(id:number):Observable <void>{
      return this.httpClinet.delete<void>(`${this.baseUrL}/${id}`);
  }
  public getAuditById(auditId:number):Observable <Audit>{
    return this.httpClinet.get<Audit>(`${this.baseUrL}/${auditId}`)
  }
    public updateAudit(auditId:number, audit: Audit):Observable <any>{
        return this.httpClinet.put<any>(`${this.baseUrL}/${auditId}`, audit);
      }
    
}
