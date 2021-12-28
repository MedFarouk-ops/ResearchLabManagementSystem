import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Outil } from '../models/outil';

@Injectable({
  providedIn: 'root'
})
export class OutilService {

  private baseURL="http://localhost:8083/outils"

  constructor(private httpClient: HttpClient) { }
  
  getOutilsList(): Observable<Outil[]>{
      return this.httpClient.get<Outil[]>(`${this.baseURL}`,{
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })});
  }
  
  createOutils(outil: Outil): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, outil);
  }
  
  getOutilsById(id: string): Observable<Outil>{
    return this.httpClient.get<Outil>(`${this.baseURL}/${id}`);
  }
  
  updateOutil(id: string, outil: Outil): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, outil);
  }
  
  deleteOutil(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
