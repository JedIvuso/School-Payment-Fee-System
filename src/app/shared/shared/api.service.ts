import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  fetchDataFromServer(data : any){
    return this.http.post<any>("https://schoolsapplication.herokuapp.com/register", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
