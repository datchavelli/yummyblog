import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SweetService {

  constructor(private service:HttpClient) { }

  dohvatiSweet(){
    var sweet=this.service.get("http://localhost:4200/assets/jsons/sweet.json");
    return sweet;
  }
}
