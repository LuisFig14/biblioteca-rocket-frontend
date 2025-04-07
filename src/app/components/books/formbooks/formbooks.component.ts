import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Book } from '../../../services/book/Book';
import { BookService } from '../../../services/book/book.service';

@Component({
  selector: 'app-formbooks',
  imports: [CommonModule, FormsModule],
  templateUrl: './formbooks.component.html',
  styleUrl: './formbooks.component.css'
})
export class FormbooksComponent implements OnInit {


  book: Book = new Book();

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute:ActivatedRoute)
  {}

  ngOnInit(): void {
    this.updateInfo();
  }

  updateInfo():void{
    this.activatedRoute.params.subscribe(
        e=>{
        let idBook=e['idBook'];
        if (idBook) {
          this.bookService.geytBookById(idBook).subscribe(
            es=>this.book=es
          );
        }
      }
    )
  }


  create():void{
    this.bookService.createBook(this.book).subscribe(
      res=>this.router.navigate(['books'])
    )
  }

  update():void{
    this.bookService.updateBook(this.book).subscribe(
      res=>this.router.navigate(['books'])
    )
  }

  

}
