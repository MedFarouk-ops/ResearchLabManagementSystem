import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private baseURL="http://localhost:8082/publications"

  constructor(private httpClient: HttpClient) { }
  
  getPublicationsList(): Observable<Publication[]>{
      return this.httpClient.get<Publication[]>(`${this.baseURL}`,{
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })});
  }
  
  createPublication(publication: Publication): Observable<Publication>{
    return this.httpClient.post<Publication>(`${this.baseURL}`, publication);
  }
  
  getPublicationById(id: string): Observable<Publication>{
    return this.httpClient.get<Publication>(`${this.baseURL}/${id}`);
  }
  
  updatePublication(id: string, publication: Publication): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, publication);
  }
  
  deletePublication(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
