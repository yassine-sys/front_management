import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl
  public updateUser(user: any) :Observable<Object>{
    return this.http.put(`${this.apiUrl}/user/edit`,user);
  }

  constructor(private http : HttpClient) { }

  public getAllUsers ():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  public deleteUser(id:any){
    return this.http.delete('http://localhost:8080/springbootwildfly/user/delete/'+id)
  }

  public addUser(user:any):Observable<Object>{
    return this.http.post(`${this.apiUrl}/user/add`,user);
  }

  public assignRapport(id:any,rapports:any):Observable<Object>{
    return this.http.post(`${this.apiUrl}/user/assign/`+id,rapports);
  }

  public detacheRapport(id:any,rapports:any):Observable<Object>{
    return this.http.post(`${this.apiUrl}/user/detach/`+id,rapports);
  }

}
