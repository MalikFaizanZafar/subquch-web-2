import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  serverUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  signUpUser(user : any){
    return this.http.post<any>(`${this.serverUrl}/users/signup`, user);
  }

  signInUser(user : any){
    return this.http.post<any>(`${this.serverUrl}/users/signin`, user);
  }

  getCategories(){
    return this.http.get<any>(`${this.serverUrl}/buisness/categories`);
  }

  getProjects(){
    return this.http.get<any>(`${this.serverUrl}/buisness`);
  }

  getProject(id: number){
    return this.http.get<any>(`${this.serverUrl}/buisness/${id}`);
  }

  getSearchedProjects( key : string){
    return this.http.get<any>(`${this.serverUrl}/buisness?title=${key}`);
  }

  getFilteredProjects(min: number, max: number){
    console.log("min : ", min);
    console.log("max : ", max);
    return this.http.get<any>(`${this.serverUrl}/buisness/filter?min=${min}&max=${max}`);
  }
}
