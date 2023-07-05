import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
 
  header = new HttpHeaders({
    'x-api-host': 'digitalstories.co.in',
    'x-api-key': 'f094fdf9-5718-4858-aa72-64136530c582'
  });
  url = 'https://digitalstories.co.in/api/v1/customers/signup';
  constructor(private http: HttpClient) { }
  users()
  {
    let token = 'f094fdf9-5718-4858-aa72-64136530c582';
    let head_obj = new HttpHeaders().set("Authorization","bearer "+token)
    return this.http.get(this.url,{headers : head_obj})
  }
}
