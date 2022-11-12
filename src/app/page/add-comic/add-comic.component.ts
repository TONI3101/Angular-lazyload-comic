import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComicModel } from 'src/app/model/model';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.scss']
})
export class AddComicComponent implements OnInit {
  newListComic!: FormGroup;
  submitted: boolean = false;
  constructor(private form: FormBuilder, private comicService: ComicService, private router: Router) { }

  ngOnInit(): void {
    this.newListComic = this.form.group({
      title: [this.comicService.comicDes.title, [Validators.required, Validators.minLength(3)]],
      author: [this.comicService.comicDes.author, [Validators.required, Validators.minLength(3)]],
      company: [this.comicService.comicDes.company, [Validators.required, Validators.minLength(3)]],
      cover: [this.comicService.comicDes.company, [Validators.required]]

    })

  }
  onSubmit(){
    this.submitted = true;
    if (this.newListComic.valid) {
      const comic: ComicModel = {

        title: this.newListComic.get('title')?.value,
        author: this.newListComic.get('author')?.value,
        company: this.newListComic.get('company')?.value,
        cover: this.newListComic.get('cover')?.value,
      }
      this.comicService.postComic(comic).subscribe();
      this.comicService.putComic(comic.id).subscribe();

      this.newListComic.reset();
      this.submitted = false;

      this.router.navigate([''])
    }
  }

}
