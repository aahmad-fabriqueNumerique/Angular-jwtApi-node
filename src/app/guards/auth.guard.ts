import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(
    private _authServ: AuthServiceService,
    private _router: Router
  ){}

  canActivate(): boolean{
    if(this._authServ.loggedIn()) {
      return true
    } else {
      window.alert('connectez_vous')
      this._router.navigate(['/login'])
      return false
    }
  }
}
