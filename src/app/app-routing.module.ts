import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'products', component: HomeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
