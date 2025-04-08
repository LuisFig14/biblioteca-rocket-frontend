import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Student } from '../../../services/student/Student';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'app-formstudent',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './formstudent.component.html',
  styleUrl: './formstudent.component.css'
})
export class FormstudentComponent implements OnInit {

  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router,
    private activatedRoute:ActivatedRoute)
  {}

  ngOnInit(): void {
    this.updateInfo();
  }

  updateInfo():void{
    this.activatedRoute.params.subscribe(
        e=>{
        let idStudent=e['idStudent'];
        if (idStudent) {
          this.studentService.getStudentById(idStudent).subscribe(
            es=>this.student=es
          );
        }
      }
    )
  }

  createStudent(): void {
    this.studentService.createStudent(this.student).subscribe(
      () => {
        alert('Student created successfully!');
        this.router.navigate(['/students']);
      },
      (error) => {
        console.error('Error creating student:', error);
      }
    );
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.student.idStudent , this.student).subscribe(
      () => {
        alert('Student updated successfully!');
        this.router.navigate(['/students']);
      },
      (error) => {
        console.error('Error updating student:', error);
      }
    );
  }



}
