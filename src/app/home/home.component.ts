import { PostoviService } from './../postovi.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postovi;
  constructor(private service:PostoviService) { }

  ngOnInit() {
    this.service.dohvatiPostove().subscribe(
      podaci=>{
        console.log(podaci);
        this.postovi=podaci;
      },
      error=>{
console.log(error);
      }
    );
  }

}
