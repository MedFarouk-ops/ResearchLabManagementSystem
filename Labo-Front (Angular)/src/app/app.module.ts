import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material.module';
import { MemberFormComponent } from './components/member/member-form/member-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './components/member/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogModule } from './confirm-dialog.module';
import { LayoutComponent } from './components/member/layout/layout.component';
import { FirebaseModule } from './firebase/firebase.module';
import { LoginComponent } from './components/member/login/login.component';
import { AdminIndexComponent } from './components/admin/admin-index/admin-index.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { AddEtudiantComponent } from './components/member/add-etudiant/add-etudiant.component';
import { AddEnseignantComponent } from './components/member/add-enseignant/add-enseignant.component';
import { NumbersComponent } from './components/admin/numbers/numbers.component';
import { EventListComponent } from './components/evenement/event-list/event-list.component';
import { PublicationListComponent } from './components/publication/publication-list/publication-list.component';
import { OutilListComponent } from './components/outil/outil-list/outil-list.component';
import { EditEtudiantComponent } from './components/member/edit-etudiant/edit-etudiant.component';
import { EditEnseignantComponent } from './components/member/edit-enseignant/edit-enseignant.component';
import { AddPubComponent } from './components/publication/add-pub/add-pub.component';
import { EditPubComponent } from './components/publication/edit-pub/edit-pub.component';
import { AddEventComponent } from './components/evenement/add-event/add-event.component';
import { EditEventComponent } from './components/evenement/edit-event/edit-event.component';
import { AddOutilComponent } from './components/outil/add-outil/add-outil.component';
import { EditOutilComponent } from './components/outil/edit-outil/edit-outil.component';
import { SelectRoleComponent } from './components/select-role/select-role.component';
import { VisitorHomeComponent } from './components/visitor/visitor-home/visitor-home.component';
import { MemberHomeComponent } from './components/membres/member-home/member-home.component';
import { VisitorMembresComponent } from './components/visitor/visitor-membres/visitor-membres.component';
import { VisitorMembresPubsComponent } from './components/visitor/visitor-membres-pubs/visitor-membres-pubs.component';
import { VisitorMembresToolsComponent } from './components/visitor/visitor-membres-tools/visitor-membres-tools.component';
import { VisitorSidebarComponent } from './components/visitor/visitor-sidebar/visitor-sidebar.component';
import { VisitorEventComponent } from './components/visitor/visitor-event/visitor-event.component';
import { ProfileComponent } from './components/member/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberFormComponent,
    LayoutComponent,
    LoginComponent,
    AdminIndexComponent,
    NavbarComponent,
    SidebarComponent,
    AddEtudiantComponent,
    AddEnseignantComponent,
    NumbersComponent,
    EventListComponent,
    PublicationListComponent,
    OutilListComponent,
    EditEtudiantComponent,
    EditEnseignantComponent,
    AddPubComponent,
    EditPubComponent,
    AddEventComponent,
    EditEventComponent,
    AddOutilComponent,
    EditOutilComponent,
    SelectRoleComponent,
    VisitorHomeComponent,
    MemberHomeComponent,
    VisitorMembresComponent,
    VisitorMembresPubsComponent,
    VisitorMembresToolsComponent,
    VisitorSidebarComponent,
    VisitorEventComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ConfirmDialogModule,
    FirebaseModule
  ],
  providers: [NumbersComponent,MemberListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
