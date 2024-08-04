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
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  register() {
    throw new Error('Method not implemented.');
  }

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],

      cpassword: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(8),
        ],
      ],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get mobile() {
    return this.registerForm.get('mobile');
  }

  get password() {
    return this.registerForm.get('password');
  }
  get cpassword() {
    return this.registerForm.get('cpassword');
  }
}
