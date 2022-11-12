import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComicComponent } from './add-comic.component';


const routes: Routes = [
  {path:'', component: AddComicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddComicRoutingModule { }
