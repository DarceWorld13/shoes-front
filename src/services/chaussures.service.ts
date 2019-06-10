import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chaussures } from '../models/chaussures';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChaussuresService {

  urlback = environment.urlPost;
  produits='/produits'
 
  constructor(private _http:HttpClient) { }

  affichertoutesLesChaussures() : Observable<Chaussures[]>{
    return this._http.get<Chaussures[]>(`${this.urlback}${this.produits}`, {"withCredentials": true})
  }


}
