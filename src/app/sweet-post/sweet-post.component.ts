import { ActivatedRoute } from '@angular/router';
import { SweetService } from './../sweet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweet-post',
  templateUrl: './sweet-post.component.html',
  styleUrls: ['./sweet-post.component.css']
})
export class SweetPostComponent implements OnInit {
  id;
  posts;
  post:any;
  param;

  constructor(private service:SweetService ,private route:ActivatedRoute) {
    this.route.params.subscribe(params=>{this.param=params['id'];});
    console.log(this.param);
   }

  ngOnInit() {
    this.service.dohvatiSweet().subscribe(
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
