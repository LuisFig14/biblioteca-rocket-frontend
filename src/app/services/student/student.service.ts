import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url ="http://localhost:8080/students"

  constructor(private http: HttpClient) { }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student);
  }

  getStudentById(idStudent: number): Observable<Student> {
    return this.http.get<Student>(`${this.url}/${idStudent}`);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  updateStudent(idStudent:any , student: Student): Observable<Student> {
    return this.http.put<Student>(this.url + '/' + idStudent, student);
  }

  deleteStudent(idStudent: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${idStudent}`);
  }




}
