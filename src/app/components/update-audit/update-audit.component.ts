import { Component, OnInit } from '@angular/core';
import { Audit } from '../../models/Audit';
import { AuditService } from '../../services/AuditService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-audit',
  standalone: false,
  
  templateUrl: './update-audit.component.html',
  styleUrl: './update-audit.component.css'
})
export class UpdateAuditComponent implements OnInit{
  audit: Audit = new Audit(); // Initialize a new audit object
  auditId!: number;

  constructor(private auditService: AuditService, private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.auditId = this.route.snapshot.params['auditId']; 
    this.getauditById(this.auditId); 
  }


  getauditById(id: number): void {
    this.auditService.getAuditById(id).subscribe(
      (data) => {
        this.audit = data; 
      },

      (error) => {
        console.error('Error fetching audit data', error); 
      }
    );

  }


  updateAuditById(): void {
    this.auditService.updateAudit(this.auditId, this.audit).subscribe(
      (data) => {
        console.log('audit updated successfully', data);
      },
      (error) => {
        console.error('Error updating audit', error); 
      }
      
    );
    this.router.navigate(["/audit"])
  }
}

