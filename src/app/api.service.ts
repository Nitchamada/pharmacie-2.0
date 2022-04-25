import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ; 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url="http://localhost/backend/"
  getmedicament(){
    return this.http.get(this.url+"medicament.php")
  }
}

