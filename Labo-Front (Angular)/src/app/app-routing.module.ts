import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from './components/admin/admin-index/admin-index.component';
import { AddEventComponent } from './components/evenement/add-event/add-event.component';
import { EditEventComponent } from './components/evenement/edit-event/edit-event.component';
import { EventListComponent } from './components/evenement/event-list/event-list.component';
import { AddEnseignantComponent } from './components/member/add-enseignant/add-enseignant.component';
import { AddEtudiantComponent } from './components/member/add-etudiant/add-etudiant.component';
import { EditEnseignantComponent } from './components/member/edit-enseignant/edit-enseignant.component';
import { EditEtudiantComponent } from './components/member/edit-etudiant/edit-etudiant.component';
import { LoginComponent } from './components/member/login/login.component';
import { MemberFormComponent } from './components/member/member-form/member-form.component';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { ProfileComponent } from './components/member/profile/profile.component';
import { MemberHomeComponent } from './components/membres/member-home/member-home.component';
import { AddOutilComponent } from './components/outil/add-outil/add-outil.component';
import { EditOutilComponent } from './components/outil/edit-outil/edit-outil.component';
import { OutilListComponent } from './components/outil/outil-list/outil-list.component';
import { AddPubComponent } from './components/publication/add-pub/add-pub.component';
import { EditPubComponent } from './components/publication/edit-pub/edit-pub.component';
import { PublicationListComponent } from './components/publication/publication-list/publication-list.component';
import { SelectRoleComponent } from './components/select-role/select-role.component';
import { VisitorEventComponent } from './components/visitor/visitor-event/visitor-event.component';
import { VisitorHomeComponent } from './components/visitor/visitor-home/visitor-home.component';
import { VisitorMembresPubsComponent } from './components/visitor/visitor-membres-pubs/visitor-membres-pubs.component';
import { VisitorMembresToolsComponent } from './components/visitor/visitor-membres-tools/visitor-membres-tools.component';

const routes: Routes = [
  { path:"" ,
    pathMatch:"full" ,
    redirectTo :"login" 
  },
  { path:"login" ,
    component: LoginComponent 
  },
  { path:"admin" ,
    pathMatch:"full" ,
    component: AdminIndexComponent 
  },
  
  // Route de Membres :

  { path:"members" ,
    pathMatch:"full" ,
    component: MemberListComponent 
  },
  { path:"etudiant" ,
  pathMatch:"full" ,
  component: AddEtudiantComponent 
  },

  { path:"profile/:id" ,
  pathMatch:"full" ,
  component: ProfileComponent 
  },
  

  { path:"enseignant" ,
  pathMatch:"full" ,
  component: AddEnseignantComponent 
  },
  {path: 'edit-ens/:id',
  component: EditEnseignantComponent},
  {path: 'edit-etd/:id',
  component: EditEtudiantComponent},
  { path:"form" ,
  pathMatch:"full" ,
  component: MemberFormComponent 
  },
  //******************************** */

  // Route de Evenement : 
  { path:"evenement" ,
  pathMatch:"full" ,
  component: EventListComponent 
  },
  { path:"evenement/add" ,
  pathMatch:"full" ,
  component: AddEventComponent 
  },
  { path:"evenement/edit/:id" ,
  pathMatch:"full" ,
  component: EditEventComponent 
  },

  //******************************** */

  // Route de Publication :
  { path:"publication" ,
  pathMatch:"full" ,
  component: PublicationListComponent 
  },
  {path: 'publication/add',
  component: AddPubComponent},
  {path: 'publication/edit/:id',
  component: EditPubComponent},
  
  //******************************** */

  // Route de Outils :
  { path:"outil" ,
  pathMatch:"full" ,
  component: OutilListComponent 
  },
  {path: 'outil/add',
  component: AddOutilComponent},
  {path: 'outil/edit/:id',
  component: EditOutilComponent},
  //******************************** */
   // Route de Selection :
   { path:"selection" ,
   pathMatch:"full" ,
   component: SelectRoleComponent 
   },
   //******************************** */
   // Route de Membres :
   { path:"membre-home" ,
   pathMatch:"full" ,
   component: MemberHomeComponent 
   },
   //******************************** */
 
   // Route de Visiteurs :
   { path:"visiteur" ,
   pathMatch:"full" ,
   component: VisitorHomeComponent 
   },
   { path:"visiteur-membre-pubs" ,
   pathMatch:"full" ,
   component:  VisitorMembresPubsComponent
   },
   { path:"visiteur-membre-tools" ,
   pathMatch:"full" ,
   component:  VisitorMembresToolsComponent
   },
   { path:"visiteur-event" ,
   pathMatch:"full" ,
   component:  VisitorEventComponent
   },
   //******************************** */
 
 
  { path:"**" ,
    redirectTo :"members" 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
