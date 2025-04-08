import { Component, OnInit } from '@angular/core';
import { Loan } from '../../services/loan/Loan';
import { LoanService } from '../../services/loan/loan.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loan',
  imports: [CommonModule, RouterLink],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent implements OnInit {

  loans: Loan[] = [];

  constructor(private loanService: LoanService) { }


  ngOnInit(): void {
    this.loadLoans(); 
  }


  loadLoans(): void {
    this.loanService.getAllLoans().subscribe(
      (data) => {
        this.loans = data; 
      },
      (error) => {
        console.error('Error al cargar los préstamos', error);
      }
    );
  }

}
