import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicModel } from 'src/app/model/model';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-comic-by-id',
  templateUrl: './comic-by-id.component.html',
  styleUrls: ['./comic-by-id.component.scss']
})
export class ComicByIdComponent implements OnInit {
  id?: number;
  comic?: ComicModel;
  constructor(private ComicService: ComicService, private activatedRouter: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      this.id = Number (params.get('id'))
      this.ComicService.getComicById(this.id).subscribe((res: any) => {

      this.comic = res

      })
    })
  }

}
