import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../services/book/Book';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  books:Book[] = [];

  private url ="http://localhost:8080/books"

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.getAllBooks().subscribe(
      e=>this.books = e
    );
  }

  getAllBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.url);
    }

}
