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
  router: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
      this.bookService.getAllBooks().subscribe(
      e=>this.books = e
    );
  }

  delete(id: number): void {
    if (confirm('¿Estás seguro de eliminar este libro?')) {
      this.bookService.deleteBook(id).subscribe({
        error: err => {
          console.error(err);
          alert(err.error?.message || 'Error al eliminar el libro');
        }
      });
    }
  }

}


