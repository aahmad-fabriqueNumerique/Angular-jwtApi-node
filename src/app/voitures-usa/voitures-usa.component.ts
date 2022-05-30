import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../service/cars.service';

@Component({
  selector: 'app-voitures-usa',
  templateUrl: './voitures-usa.component.html',
  styleUrls: ['./voitures-usa.component.css']
})
export class VoituresUSAComponent implements OnInit {


  usaCars: any = []

  constructor(private carServ: CarsService, private _router: Router) { }

  ngOnInit(): void {
    this.carServ.getUsaCars().subscribe(
      res => this.usaCars = res,
      err => {
        if(err instanceof HttpErrorResponse) {
          if(err.status === 401) {
            this._router.navigate(['/login'])
          }
        }
      }
      
    )
  }

}
