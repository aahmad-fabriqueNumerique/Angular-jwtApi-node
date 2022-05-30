import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../service/cars.service';

@Component({
  selector: 'app-voituresjap',
  templateUrl: './voituresjap.component.html',
  styleUrls: ['./voituresjap.component.css']
})
export class VoituresjapComponent implements OnInit {

  japCars: any = []

  constructor(private carServ: CarsService, private _router: Router) { }

  ngOnInit(): void {
    this.carServ.getJapCars().subscribe(
      res => this.japCars = res,
      
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
