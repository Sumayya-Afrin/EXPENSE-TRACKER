import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
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
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.maxLength(10)]],
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
      },
      { Validators: this.passwordMatch }
    );
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
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

  passwordMatch: ValidatorFn = (
    formGroup: AbstractControl
  ): { [key: string]: boolean } | null => {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('cpassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { 'passwordMisMatch ': true };
    }
    return null;
  };

  register() {
    if (this.registerForm.valid) {
      this.router.navigate(['/login']);
    }
  }
}
