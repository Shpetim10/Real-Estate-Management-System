import { EmailService } from './../Services/email.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Property } from '../Entities/Property';
import { PropertyServiceService } from '../Services/property-service.service';
import { CommonModule } from '@angular/common';
import { PropertyDataService } from '../Services/property-data.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-property-client',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './view-property-client.component.html',
  styleUrl: './view-property-client.component.css'
})
export class ViewPropertyClientComponent implements OnInit{
  constructor(private emailService: EmailService, public propertyService: PropertyServiceService, private propertyDataService: PropertyDataService, private router: Router){}
  property :Property={} as Property;
  ngOnInit(): void {
    this.property = this.propertyDataService.property ?? {} as Property;
    console.log(this.property);
  }
  
  sendEmail(form: NgForm){
    this.emailService.sendEmailToAgent(this.property.agent.email,form.value,this.property).subscribe(
      {
        next: ()=> {console.log("Agent was notified successfully!"); form.resetForm()},
        error: ()=> console.log("There ocurred an error!")
      }
      )
  }
}
