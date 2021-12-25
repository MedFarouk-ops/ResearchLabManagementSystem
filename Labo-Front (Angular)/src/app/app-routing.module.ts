import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from './components/admin/admin-index/admin-index.component';
import { LoginComponent } from './components/member/login/login.component';
import { MemberFormComponent } from './components/member/member-form/member-form.component';
import { MemberListComponent } from './components/member/member-list/member-list.component';

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
  { path:"form" ,
    pathMatch:"full" ,
    component: MemberFormComponent 
  },
  { path:":id/edit" ,
    pathMatch:"full" ,
    component: MemberFormComponent 
  },
  
  { path:"**" ,
    redirectTo :"members" 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
