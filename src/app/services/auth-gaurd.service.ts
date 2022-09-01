import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{


  user!: IUser
  token: boolean= false

  constructor(private route: Router, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    this.token= this.userService.getToken()
    if(this.token) {
      return true
    }

    this.route.navigate(['/login'])
    return false

  }
}
