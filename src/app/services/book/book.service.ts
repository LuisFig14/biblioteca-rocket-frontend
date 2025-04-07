import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';
import { BooksComponent } from '../../components/books/books.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url ="http://localhost:8080/books"

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  geytBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.url}/${book.idBook}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }






}
