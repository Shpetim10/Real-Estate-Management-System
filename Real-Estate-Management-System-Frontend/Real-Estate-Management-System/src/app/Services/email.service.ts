import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../Entities/Client';
import { Property } from '../Entities/Property';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiServerUrl: string='http://localhost:8080/email/send';
  constructor(private http: HttpClient) { }
  
  sendEmailToAgent(to:string, client: Client, property: Property){
    return this.http.post<string>(this.apiServerUrl,{to,client,property});
  }
}
