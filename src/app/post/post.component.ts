import { PostoviService } from './../postovi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
id;
posts;
post:any;
param;


submit(formElementsValues){
  console.log(formElementsValues);
}

  constructor(private service:PostoviService ,private route:ActivatedRoute) {
    this.route.params.subscribe(params=>{this.param=params['id'];});
    console.log(this.param);
   }

  ngOnInit() {
   
    this.service.dohvatiPostove().subscribe(
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
