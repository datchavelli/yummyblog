import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.css']
})
export class NavigacijaComponent implements OnInit {

  linkovi:any[];
  constructor() { }

  ngOnInit() {
    this.linkovi=[
      
      {
        href:"/",
        naziv:"HOME"
      },
      {
        href:"/sweetBites",
        naziv:"SWEET BITES"
      },
      {
        href:"/saltyBites",
        naziv:"SALTY BITES"
      },
      {
        href:"/about",
        naziv:"ABOUT ME"
      },
      {
        href:"/contact",
        naziv:"CONTACT"
      }
    ];
  }

}
