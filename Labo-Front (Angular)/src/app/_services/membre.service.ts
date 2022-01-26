import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from '../app_config';
import { MemberFormComponent } from '../components/member/member-form/member-form.component';
import { EnseignementChercheur } from '../models/enseignement-chercheur';
import { Etudiant } from '../models/etudiant';
import { Membre } from '../models/membre';

@Injectable({
  providedIn: 'root'
})
export class MembreService {


  private baseURL="http://localhost:8081/api/membres";
  public tab : Membre[]= GLOBAL._DB.membre;
  membre : Membre ; 
  constructor(private httpClient: HttpClient) { 
  }
  // saveMember(member : Membre) : Promise <Membre> {
  //   return this.httpClient.post<Membre>('${this.baseURL}' , member).toPromise();
  //   // const memberToSave = {...member,}
  //   // memberToSave.id = member.id?? Math.ceil (Math.random()*10000).toString();
  //   // memberToSave.createdDate = member.createdDate?? new Date().toISOString();
  //   // this.tab = [memberToSave , ...this.tab.filter(item => item.id != memberToSave.id)];
  //   // return new Promise (resolve => resolve(memberToSave) );
  // }

  // getMemberById(id : string) : Promise<Membre>{
  //   //this.httpClient.get<Member> ('linkToRestApi');
  //   return new Promise(resolve => resolve (
  //     this.tab.filter(item => item.id === id)[0]??null));
  // }


  // RemoveMemberById(id : string) : Promise <void>{
  //   // return this.httpClient.delete<void> ('linkToRestApi');
  //   this.tab = this.tab.filter((member) => member.id !== id);
  //   return new Promise((resolve) => resolve());
  // }


  // getAllMembers() : Promise <Membre[]> {
  //   //return this.httpClient.get<Membre[]> ("link to rest api").toPromise();
  //   return new Promise(resolve => resolve(this.tab));
  // }


  getMembersList(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  // save member :
  saveMembreEtd(etd: Etudiant): Observable<any>{
    
    console.log(etd);

    return this.httpClient.post(`${this.baseURL}/etudiant`, etd , {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })});
  }

  saveMembreEns(ens: EnseignementChercheur): Observable<Object>{
    console.log(ens);

    return this.httpClient.post(`${this.baseURL}/enseignant`, ens , {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })});
  }

  deleteMembre(id: any): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // Get Members By Id :

  getEnsById(id: string): Observable<EnseignementChercheur>{
    return this.httpClient.get<EnseignementChercheur>(`${this.baseURL}/${id}`);
  }

  getEtdById(id: string): Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(`${this.baseURL}/${id}`);
  }
  
  // Update Members functions :
  
  updateMemberEns(id: string, ens: EnseignementChercheur): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/enseignant/${id}`, ens);
  }
  
  updateMemberEtd(id: string, etd: Etudiant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/etudiant/${id}`, etd);
  }

  getEnsList(): Observable<EnseignementChercheur[]>{
    return this.httpClient.get<EnseignementChercheur[]>(`${this.baseURL}/enseignant`);
  }



  getMemberById(id : string) : Observable<Membre> {
    return this.httpClient.get<Membre>(`${this.baseURL}/${id}`);
  }
 
  public publish(idMembre: number, idPub: number) {
    
    return this.httpClient.put<void>(`${this.baseURL}/membre/${idMembre}/publication/${idPub}`,{});
  }


  public publishOutil(idMembre: number, idOutil: number) {
    
    return this.httpClient.put<void>(`${this.baseURL}/membre/${idMembre}/outil/${idOutil}`,{});
  }
}
