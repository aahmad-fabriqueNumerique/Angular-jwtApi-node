import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authServ: AuthServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenInterceptor = this.authServ.getTokenForInterceptor()
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenInterceptor}`
        }
      })
      return next.handle(tokenizedReq)
  }
}
