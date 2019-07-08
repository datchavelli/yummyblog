import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostoviService {

  constructor(private service: HttpClient) { }

  dohvatiPostove(){
    var postovi=this.service.get("http://localhost:4200/assets/jsons/postovi.json");
    return postovi;
  }
}
