import { Component, OnInit } from '@angular/core';
import { Audit } from '../../models/Audit';
import { AuditService } from '../../services/AuditService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audit',
  standalone: false,
  
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.css'
})
export class AuditComponent implements OnInit{
    audit!:Audit[]
  
    constructor(private AuditService:AuditService,private router:Router){}
    ngOnInit(): void {
        this.listOfAudits()
    }
    listOfAudits(){
      this.AuditService.getAllAudit().subscribe(data =>{
        console.log(data)
        this.audit= data
      },error => console.log(error))
    }
    deleteAudit(auditId:number){
      this.AuditService.deleteAudit(auditId).subscribe(data =>{
        this.listOfAudits();
        console.log(data)
      })
    }
    addAudit(){
      this.router.navigate(['/newAudit'])
    }
    viewAudit(auditId:number){
      this.router.navigate(['/view-audit', auditId])
  
    }
    updateAuditById(auditId:number){
      this.router.navigate(['/update-audit', auditId])
    }
  }
  