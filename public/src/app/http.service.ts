import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getcakes(){
    return this._http.get('/cakes')
  }

  addcakes(newcake){
    return this._http.post('/cakes',newcake)
  }

  getcake(id:string){
    return this._http.get('/cakes/' + id)
  }

  updateCake(id:string,comment){
    return this._http.put('/cakes/'+id, comment)
  }
}
