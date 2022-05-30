import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUserData: any = {}

  constructor(private authServ: AuthServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.authServ.registerUser(this.registeredUserData).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this._router.navigate(['/login'])
    }, (err) => {
      console.log(err);
    })
  }
}
