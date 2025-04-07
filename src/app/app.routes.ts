import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { StudentComponent } from './components/student/student.component';
import { LoanComponent } from './components/loan/loan.component';
import { FormbooksComponent } from './components/books/formbooks/formbooks.component';

export const routes: Routes = [

    {path: '', component:HomeComponent},
    {path: 'books', component:BooksComponent},
    {path: 'books/new', component:FormbooksComponent},
    {path: 'books/edit/:idBook', component:FormbooksComponent},


    {path: 'students', component:StudentComponent},
    {path: 'loans', component:LoanComponent}


];
