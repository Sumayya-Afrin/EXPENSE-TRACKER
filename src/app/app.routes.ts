import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  {
    path: 'home',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
    ],
  },
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
      {
        path: 'dash-board',
        component: DashBoardComponent,
      },
    ],
    //component: RegistrationComponent,
  },
];
