import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "contactus", component: ContactusComponent},
  { path: "", component: LoginComponent },
  { path: "**", redirectTo: "/" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
