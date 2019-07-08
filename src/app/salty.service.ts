import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaltyService {

  constructor(private service:HttpClient) { }

  dohvatiSalty(){
     var salty=this.service.get("http://localhost:4200/assets/jsons/salty.json");
     return salty;
  }
}
