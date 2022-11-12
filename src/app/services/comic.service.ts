import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComicModel } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  public comicList: ComicModel[] = []
  comicDes: ComicModel ={

    title: "",
    author: "",
    cover: "",
    company: ""
  }
  constructor(private http:HttpClient) { }

  getComic(){
    return this.http.get('http://localhost:3000/comics')
  }

  getComicById(id: any){
    return this.http.get('http://localhost:3000/comics/' + id)
  }

  postComic(newComic: any){
    return this.http.post('http://localhost:3000/comics/', newComic)
  }

  putComic(newComic: any){
    return this.http.put('http://localhost:3000/comics/' + newComic.id, newComic)
  }

  deleteComic(comic: any){
    return this.http.delete('http://localhost:3000/comics/'+ comic.id )
  }

  editItem (item: any){
    this.comicDes = item;
  }

}
