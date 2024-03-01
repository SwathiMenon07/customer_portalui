import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from 'src/change-password/change-password.component';
import { HomeComponent } from 'src/home/home.component';
import { LoginComponent } from 'src/login/login/login.component';
import { RegisterComponent } from 'src/register/register.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"change-password",component:ChangePasswordComponent},
{path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
