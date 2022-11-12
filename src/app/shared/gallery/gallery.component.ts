import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicModel } from 'src/app/model/model';
import { ComicService } from 'src/app/services/comic.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
@Input () newComicList: ComicModel[] = []

  constructor(private comicService: ComicService, private router: Router) { }

  ngOnInit(): void {

  }
   editComic(comic: any) {
    this.comicService.editItem(comic);
    this.router.navigate(["/add"])
  };



}
