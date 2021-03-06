import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _registerURL = "http://localhost:3000/api/register"
  private _loginURL = "http://localhost:3000/api/login"

  // constructor(private http: HttpClient) { }
  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user: any){
    return this.http.post(this._registerURL, user)
  }

  loginUser(user: any){
    return this.http.post(this._loginURL, user)
  }

  loggedIn(){
    // !! return boolean = true or false
    return !!localStorage.getItem('token') // after generating authGuard
  }

  // After creating the intercept() method in HttpInterceptor Service
  getTokenForInterceptor(){
    return localStorage.getItem('token')

  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])

  }
}
