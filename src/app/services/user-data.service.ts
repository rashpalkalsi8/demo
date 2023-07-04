import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  header = new HttpHeaders({
    'x-api-host': 'digitalstories.co.in',
    'x-api-key': ''
  });
  url = 'https://digitalstories.co.in/api/v1/customers/signup';
  constructor(private http: HttpClient) { }
  users()
  {
    return this.http.get(this.url,{headers : this.header})
  }
}
