import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../service/cars.service';

@Component({
  selector: 'app-nos-offres',
  templateUrl: './nos-offres.component.html',
  styleUrls: ['./nos-offres.component.css']
})
export class NosOffresComponent implements OnInit {

  constructor(private carServ: CarsService, private _router: Router) { }

  offres: any = []

  ngOnInit(): void {
    this.carServ.getOffresCars().subscribe(
      res => this.offres = res,
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

// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.
