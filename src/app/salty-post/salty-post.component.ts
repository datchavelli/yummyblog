import { ActivatedRoute } from '@angular/router';
import { SaltyService } from './../salty.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salty-post',
  templateUrl: './salty-post.component.html',
  styleUrls: ['./salty-post.component.css']
})
export class SaltyPostComponent implements OnInit {

  id;
  posts;
  post:any;
  param;

  constructor(private service:SaltyService ,private route:ActivatedRoute) {
    this.route.params.subscribe(params=>{this.param=params['id'];});
    console.log(this.param);
   }

  ngOnInit() {
    this.service.dohvatiSalty().subscribe(
      podaci=>{
        this.posts=podaci;
        console.log(podaci);
        var count = Object.keys(this.posts).length;

        for(var i = 0; i < count; i++){
         
          if(this.param==this.posts[i].id){
            this.post=this.posts[i];
          }
        }
        console.log(this.post);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
