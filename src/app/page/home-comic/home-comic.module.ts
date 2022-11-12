import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComicRoutingModule } from './home-comic-routing.module';
import { HomeComicComponent } from './home-comic.component';
import { ComicByIdComponent } from './comic-by-id/comic-by-id.component';
import { GalleryComponent } from 'src/app/shared/gallery/gallery.component';







@NgModule({
  declarations: [
    HomeComicComponent,
    ComicByIdComponent,
    GalleryComponent,




  ],
  imports: [
    CommonModule,
    HomeComicRoutingModule,


  ]
})
export class HomeComicModule { }
