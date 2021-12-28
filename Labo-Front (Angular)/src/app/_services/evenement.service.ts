import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private baseURL="http://localhost:8082/publications"

  constructor(private httpClient: HttpClient) { }
  

  
}
