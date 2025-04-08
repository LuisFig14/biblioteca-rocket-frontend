import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { StudentComponent } from './components/student/student.component';
import { LoanComponent } from './components/loan/loan.component';
import { FormbooksComponent } from './components/books/formbooks/formbooks.component';
import { FormstudentComponent } from './components/student/formstudent/formstudent.component';
import { FormloanComponent } from './components/loan/formloan/formloan.component';
import { CatalogComponent } from './components/catalog/catalog.component';

export const routes: Routes = [

    {path: '', component:HomeComponent},

    {path: 'books', component:BooksComponent},
    {path: 'books/new', component:FormbooksComponent},
    {path: 'books/edit/:idBook', component:FormbooksComponent},

    {path: 'students', component:StudentComponent},
    {path: 'students/new', component:FormstudentComponent},
    {path: 'students/edit/:idStudent', component:FormstudentComponent},

    {path: 'loans', component:LoanComponent},
    {path: 'loans/new', component:FormloanComponent},

    {path:'catalog', component:CatalogComponent},


];
