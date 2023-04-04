import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL = "http://localhost:9080/books";

  constructor(private httpClient : HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.apiURL);
  }

}