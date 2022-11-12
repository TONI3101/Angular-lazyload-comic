import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicByIdComponent } from './comic-by-id/comic-by-id.component';
import { HomeComicComponent } from './home-comic.component';

const routes: Routes = [
  {path: '', component: HomeComicComponent},
  {path: ':id', component: ComicByIdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeComicRoutingModule { }
