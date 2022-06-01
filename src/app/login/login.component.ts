import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServ: AuthServiceService, private _router: Router) { }

  loginUserData: any = {}


  ngOnInit(): void {
  }

  loginUser() {
    this.authServ.loginUser(this.loginUserData).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token)
      this._router.navigate(['/nos-offres'])
      
    }, (err) => {
      console.log(err);
    })
  }
}


// res => {
//   console.log(res)
//   localStorage.setItem('token', res.token)
// },