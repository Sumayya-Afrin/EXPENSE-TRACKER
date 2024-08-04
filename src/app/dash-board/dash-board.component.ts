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
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
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
  ],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss',
})
export class DashBoardComponent {}
