import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NosOffresComponent } from './nos-offres/nos-offres.component';
import { RegisterComponent } from './register/register.component';
import { VoituresUSAComponent } from './voitures-usa/voitures-usa.component';
import { VoituresjapComponent } from './voituresjap/voituresjap.component';

const routes: Routes = [
  {path: '', redirectTo: '/voitures-americaines', pathMatch:'full'},
  {path: 'voitures-japonaises', component:VoituresjapComponent},
  {path: 'voitures-americaines', component:VoituresUSAComponent}, 
  {path: 'nos-offres', component:NosOffresComponent,
  canActivate:[AuthGuard]
 },
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
