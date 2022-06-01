import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor { // we should implement the httpInterceptor

  // constructor(private injector: Injector) { }
  constructor(private authServ: AuthServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let tokenInterceptor = this.injector.get(AuthServiceService)
    let tokenInterceptor = this.authServ.getTokenForInterceptor()
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenInterceptor}`
        }
      })
      return next.handle(tokenizedReq)
  }
}

// ====== then we have to apply the middleware in the backend ======================>

// To create an Interceptor, we need to implement the HttpInterceptor interface from @angular/common/http package. Every time our application makes an HTTP request using the HttpClient service, the Interceptor calls the intercept() method.

// When the intercept() method is called Angular passes a reference to the httpRequest object. With this request, we can inspect it and modify it as necessary. Once our logic is complete, we call next.handle and return the updated request onto the application.

// Once our Interceptor is created, we need to register it as a multi-provider since there can be multiple interceptors running within an application. Important note, you must register the provider to the app.module for it to properly apply to all application HTTP requests. Interceptors will only intercept requests that are made using the HttpClient service.

// On the httpRequest object, we can call the clone method to modify the request object and return a new copy. In this example we are attaching the API_KEY value as a header to every HTTP request httpRequest.clone({ setHeaders: { Bearer ${tokenInterceptor} } }).