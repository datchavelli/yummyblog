import { AboutComponent } from './about/about.component';
import { SweetService } from './sweet.service';
import { SaltyService } from './salty.service';
import { PostoviService } from './postovi.service';


import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SaltyBitesComponent } from './salty-bites/salty-bites.component';
import { SweetBitesComponent } from './sweet-bites/sweet-bites.component';
import { PostComponent } from './post/post.component';
import { SweetPostComponent } from './sweet-post/sweet-post.component';
import { SaltyPostComponent } from './salty-post/salty-post.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigacijaComponent,
    HomeComponent,
    ContactComponent,
    SaltyBitesComponent,
    SweetBitesComponent,
    PostComponent,
    SweetPostComponent,
    SaltyPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'saltyBites',
        component:SaltyBitesComponent
      },
      {
        path:'sweetBites',
        component:SweetBitesComponent
      },
     {
       path:'post/:id',
       component:PostComponent
     },
     {
      path:'sweetPost/:id',
      component:SweetPostComponent
    },
    {
      path:'saltyPost/:id',
      component:SaltyPostComponent
    }
    ])
  ],
  providers: [
    PostoviService,
    SaltyService,
    SweetService
  ],
  bootstrap: [AppComponent, NavigacijaComponent]
})
export class AppModule { }
