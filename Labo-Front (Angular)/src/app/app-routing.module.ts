import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from './components/admin/admin-index/admin-index.component';
import { EventListComponent } from './components/evenement/event-list/event-list.component';
import { AddEnseignantComponent } from './components/member/add-enseignant/add-enseignant.component';
import { AddEtudiantComponent } from './components/member/add-etudiant/add-etudiant.component';
import { EditEnseignantComponent } from './components/member/edit-enseignant/edit-enseignant.component';
import { EditEtudiantComponent } from './components/member/edit-etudiant/edit-etudiant.component';
import { LoginComponent } from './components/member/login/login.component';
import { MemberFormComponent } from './components/member/member-form/member-form.component';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { OutilListComponent } from './components/outil/outil-list/outil-list.component';
import { PublicationListComponent } from './components/publication/publication-list/publication-list.component';

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
  { path:"members" ,
    pathMatch:"full" ,
    component: MemberListComponent 
  },
  { path:"etudiant" ,
    pathMatch:"full" ,
    component: AddEtudiantComponent 
  },
  { path:"enseignant" ,
  pathMatch:"full" ,
  component: AddEnseignantComponent 
  },
  { path:"evenement" ,
  pathMatch:"full" ,
  component: EventListComponent 
  },
  { path:"publication" ,
  pathMatch:"full" ,
  component: PublicationListComponent 
  },
  { path:"outil" ,
  pathMatch:"full" ,
  component: OutilListComponent 
  },
  { path:"form" ,
    pathMatch:"full" ,
    component: MemberFormComponent 
  },
  {path: 'edit-ens/:id',
  component: EditEnseignantComponent},
  
  {path: 'edit-etd/:id',
  component: EditEtudiantComponent},
  

  { path:"**" ,
    redirectTo :"members" 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
