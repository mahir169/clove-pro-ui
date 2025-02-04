import { Component, OnInit } from '@angular/core';
import { Audit } from '../../models/Audit';
import { AuditService } from '../../services/AuditService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-audit',
  standalone: false,
  
  templateUrl: './new-audit.component.html',
  styleUrl: './new-audit.component.css'
})
export class NewAuditComponent implements OnInit {
  audit: Audit = new Audit()
  constructor(private newAudit: AuditService,private router:Router){}
  ngOnInit(): void {
    
  }
  onSubmit(){
    this.newAudit.saveAudit(this.audit).subscribe(data =>{
      console.log(data)
    })
    this.router.navigate(['/audit'])
  }

}

