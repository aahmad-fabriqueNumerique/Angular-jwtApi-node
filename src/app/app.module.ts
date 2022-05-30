import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthServiceService } from './service/auth-service.service';
import { CarsService } from './service/cars.service';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VoituresjapComponent } from './voituresjap/voituresjap.component';
import { VoituresUSAComponent } from './voitures-usa/voitures-usa.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { NosOffresComponent } from './nos-offres/nos-offres.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    VoituresjapComponent,
    VoituresUSAComponent,
    NosOffresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AuthServiceService, CarsService, AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
