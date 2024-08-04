import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  {
    path: 'login',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
    ],
    //component: RegistrationComponent,
  },
];
