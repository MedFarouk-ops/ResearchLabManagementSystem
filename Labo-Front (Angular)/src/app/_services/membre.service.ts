import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from '../app_config';
import { MemberFormComponent } from '../components/member/member-form/member-form.component';
import { Membre } from '../models/membre';

@Injectable({
  providedIn: 'root'
})
export class MembreService {


  private baseURL="http://localhost:9000/membres";
  //public tab : Membre[]= GLOBAL._DB.membre;
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
  // // deleteMembreById(id : string) : Promise<Membre>{
    
  // // }

  getMembersList(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

}
