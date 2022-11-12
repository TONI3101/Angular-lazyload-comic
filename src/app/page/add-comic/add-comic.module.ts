import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComicRoutingModule } from './add-comic-routing.module';
import { AddComicComponent } from './add-comic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddComicComponent
  ],
  imports: [
    CommonModule,
    AddComicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AddComicModule { }
