import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'add', loadChildren: () => import("./page/add-comic/add-comic.module").then(m => m.AddComicModule)},
  {path:'', loadChildren: () => import("./page/home-comic/home-comic.module").then(m => m.HomeComicModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
