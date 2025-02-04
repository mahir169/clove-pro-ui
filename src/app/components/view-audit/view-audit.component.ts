import { Component, OnInit } from '@angular/core';
import { Audit } from '../../models/Audit';
import { AuditService } from '../../services/AuditService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-audit',
  standalone: false,
  
  templateUrl: './view-audit.component.html',
  styleUrl: './view-audit.component.css'
})
export class ViewAuditComponent implements OnInit{
  audit: Audit = new Audit
  auditId!: number
  constructor(private  auditService: AuditService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.auditId = this.route.snapshot.params['auditId']
    this.viweByhId()
    }

    viweByhId(){
      this.auditService.getAuditById(this. auditId).subscribe(data =>{
        console.log(data)
        this.audit = data
      })
    }

}

