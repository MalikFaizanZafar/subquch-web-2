import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  serverUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get<any>(`${this.serverUrl}/buisness`);
  }

  getSearchedProjects( key : string){
    return this.http.get<any>(`${this.serverUrl}/buisness?title=${key}`);
  }
}
