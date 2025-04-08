import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoanService } from '../../../services/loan/loan.service';
import { BookService } from '../../../services/book/book.service';
import { StudentService } from '../../../services/student/student.service';
import { Book } from '../../../services/book/Book';
import { Student } from '../../../services/student/Student';
import { Loan } from '../../../services/loan/Loan';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formloan',
  imports: [
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './formloan.component.html',
  styleUrl: './formloan.component.css'
})
export class FormloanComponent implements OnInit {


  loanForm!: FormGroup;
  books: Book[] = [];
  students: Student[] = [];

  
  constructor(
    private formBuilder: FormBuilder,
    private loanService: LoanService,
    private bookService: BookService,
    private studentService: StudentService,
    private router: Router
  ) { }


  ngOnInit(): void {
      this.loanForm = this.formBuilder.group({
      idBook: ['', Validators.required],  
      idStudent: ['', Validators.required], 
      loanDate: ['', Validators.required], 
      returnDate: ['', Validators.required] 
    });

    this.loadBooks();
    this.loadStudents();
  }

  loadBooks(): void {
    this.bookService.getAllBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error('Error al cargar los libros', error);
      }
    );
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (data) => {
        this.students = data;  
      },
      (error) => {
        console.error('Error al cargar los estudiantes', error);
      }
    );
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      const newLoan: Loan = this.loanForm.value;

      this.loanService.createLoan(newLoan).subscribe(
        (response: any) => {
          this.router.navigate(['/loans']);
        },
        (error: any) => {
          console.error('Error al crear el préstamo', error);
        }
      );
    }
  }




} 