import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user!: IUser

  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {

  }
}
