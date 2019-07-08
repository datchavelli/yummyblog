import { SweetService } from './../sweet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweet-bites',
  templateUrl: './sweet-bites.component.html',
  styleUrls: ['./sweet-bites.component.css']
})
export class SweetBitesComponent implements OnInit {
sweet;
  constructor(private service:SweetService) { }

  ngOnInit() {
    this.service.dohvatiSweet().subscribe(
      podaci=>{
        console.log(podaci);
        this.sweet=podaci;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
