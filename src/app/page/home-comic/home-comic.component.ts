
import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';



@Component({
  selector: 'app-home-comic',
  templateUrl: './home-comic.component.html',
  styleUrls: ['./home-comic.component.scss']
})
export class HomeComicComponent implements OnInit {

  comicList: any = [];
  constructor(private comicservice: ComicService,) { }

  ngOnInit(): void {
      this.comicservice.getComic().subscribe((res: any) => {
      console.log(res);
      this.comicList = res
    })

  }
  deleteComic(comicList: any){
    this.comicList.pop(comicList.id)
    console.log('elimino');

  }

}
