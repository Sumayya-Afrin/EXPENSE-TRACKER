import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Pipe } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ExpenseService } from '../expense.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IUser } from '../app.component';
import { ITransaction } from '../app.component';
import { ISavingGoal } from '../app.component';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatListModule,
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss',
})
export class DashBoardComponent {
  user!: IUser;
  balance: number = 0;
  transactions: any[] = [];
  savingsGoals: any[] = [];
  recentTransactions: any;
  isLoading: boolean = true;
  msg = '';
  name: any;

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL
    this.expenseService
      .getUserDetailsById(id)
      .then((data) => {
        this.user = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong';
      });
  }
}
