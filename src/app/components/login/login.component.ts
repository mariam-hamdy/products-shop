import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user!: IUser


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }



  login(loginForm: NgForm) {

    if(loginForm.valid) {
      let email = loginForm.controls.email?.value
      let password = loginForm.controls.password?.value
      //'kminchelle','0lelplR'
      this.userService.getUser('kminchelle','0lelplR').subscribe((data) => {

        this.router.navigate(['/products'])
      })


      this.router.navigate(['/products'])

    }
  }


}


/**this.userService.getUserSubject().subscribe((data: IUser) => {
        this.user = data
      }) */

