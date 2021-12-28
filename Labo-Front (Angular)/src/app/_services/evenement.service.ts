import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private baseURL="http://localhost:8084/evenements"

  constructor(private httpClient: HttpClient) { }
  
  getEvenementsList(): Observable<Evenement[]>{
      return this.httpClient.get<Evenement[]>(`${this.baseURL}`,{
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })});
  }
  
  createEvenement(event: Evenement): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, event);
  }
  
  getEvenementsById(id: string): Observable<Evenement>{
    return this.httpClient.get<Evenement>(`${this.baseURL}/${id}`);
  }
  
  updateEvenement(id: string, event: Evenement): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, event);
  }
  
  deleteEvenement(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
  
}
