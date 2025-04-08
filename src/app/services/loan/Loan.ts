import { Book } from "../book/Book";
import { Student } from "../student/Student";

export class Loan{

    idLoan:any;
    idBook:any;
    idStudent:any;
    loanDate:any;
    returnDate:any;

    book?:Book
    student?:Student;

}