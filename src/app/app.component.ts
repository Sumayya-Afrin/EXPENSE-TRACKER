import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: number;
  transactions: ITransaction[];
  currentBalance: string;
  savinggoals: ISavingGoal[];
}

export interface ITransaction {
  id: string;
  date: string; // Date as a string in ISO format (e.g., "2024-08-01")
  amount: number; // Amount should be a number
  category: string;
  description: string;
}

export interface ISavingGoal {
  id: string;
  name: string;
  targetAmount: number; // Target amount as a number
  currentAmount: number; // Current amount as a number
  targetDate: string; // Target date as a string in ISO format (e.g., "2024-12-31")
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'expense-tracker-app';
}
