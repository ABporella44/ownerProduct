import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'Registration', component: RegistrationComponent},
  {path:'main',component:MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routingComponents = [LoginComponent, RegistrationComponent, MainComponent]