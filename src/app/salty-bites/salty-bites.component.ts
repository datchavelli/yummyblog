import { SaltyService } from './../salty.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salty-bites',
  templateUrl: './salty-bites.component.html',
  styleUrls: ['./salty-bites.component.css']
})
export class SaltyBitesComponent implements OnInit {
  salty;
  constructor(private service:SaltyService) { }

  ngOnInit() {
    this.service.dohvatiSalty().subscribe(
      podaci=>{
        console.log(podaci);
        this.salty=podaci;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
