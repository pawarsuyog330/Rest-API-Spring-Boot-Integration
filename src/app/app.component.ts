import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books:Book[] = [];
 
  constructor(private service:BookService){ }

  getBooksData(){
    this.service.getBooks().subscribe(data => {
        this.books = data;
    });
  }
 }