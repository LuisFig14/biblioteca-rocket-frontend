import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../services/book/Book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  imports: [CommonModule , RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent implements OnInit {
  
  books:Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
      this.bookService.getAllBooks().subscribe(
      e=>this.books = e
    );

  }
}


