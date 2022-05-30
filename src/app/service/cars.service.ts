import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  private _usaCarsURL = "http://localhost:3000/api/voitures-americaines"
  private _japCarsURL = "http://localhost:3000/api/voitures-japonaises"
  private _offresURL = "http://localhost:3000/api/nos-offres"



  getJapCars() {
    return this.http.get<any>(this._japCarsURL)
    
  }

  getUsaCars() {
    return this.http.get<any>(this._usaCarsURL)
    
  }

  getOffresCars() {
    return this.http.get<any>(this._offresURL)
  }
}
