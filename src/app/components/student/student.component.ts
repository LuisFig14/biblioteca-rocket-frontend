import { Component, OnInit } from '@angular/core';
import { Student } from '../../services/student/Student';
import { StudentService } from '../../services/student/student.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student',
  imports: [CommonModule, RouterLink],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  
  constructor(private studentService: StudentService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }


  delete(idStudent: number): void {
    this.dialog.open(ConfirmDialogComponent).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.studentService.deleteStudent(idStudent).subscribe(() => {
          this.studentService.getAllStudents().subscribe(
            students => this.students = students
          );
        });
      }
    });
  }





}
