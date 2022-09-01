import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  user!: IUser
  userSubject = new Subject()
  token: string=''

  constructor(private http: HttpClient) { }


  setToken(token: string): void {
    sessionStorage.setItem(this.token,token);
  }

  getToken(): any {

    return sessionStorage.getItem(this.token)
  }


  getUserSubject(): Observable<any> {
    return this.userSubject.asObservable()
  }

  getUser(email: string, password: string) {

    return this.http.post(`${environment.serverUrl}auth/login`, {
      username: email,
      password: password

    }).pipe(
      map((data: any) =>{
        let user = {
          email: email,
          token : data.token
        }
        this.setToken(data.token)
        this.userSubject.next(user)
        return user
      })
    )

  }

  logout() {
    sessionStorage.clear()
    this.userSubject.next(null)
  }

  /**.subscribe((data: any) => {
      this.user = data as IUser
      this.userSubject.next({...this.user})
    }) */






}
