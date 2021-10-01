import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DemoMaterialModule} from "./material-module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./route/route.module";
import {MenuPostulantComponent} from "./components/Postulant/Menu-postulant/menu-postulant/menu-postulant.component";
import { ProfilePostulantComponent } from './components/Postulant/profile-postulant/profile-postulant.component';
import { ProjectComponent } from './components/Postulant/Project/project/project.component';
import { ProjectEditComponent } from './components/Postulant/Project/project-edit/project-edit.component';
import {FormsModule} from "@angular/forms";
import { ProjectAddComponent } from './components/Postulant/Project/project-add/project-add.component';
import { ProjectDeleteComponent } from './components/Postulant/Project/project-delete/project-delete/project-delete.component';
import { MenuPetitionerComponent } from './components/Petitioner/menu-petitioner/menu-petitioner.component';
import { ProfilePetitionerComponent } from './components/Petitioner/profile-petitioner/profile-petitioner.component';
import { AnnouncementComponent } from './components/Petitioner/announcement/announcement/announcement.component';
import { ViewAnnouncementComponent } from './components/Petitioner/view-announcement/view-announcement/view-announcement.component';
import { AddAnnouncementComponent } from './components/Petitioner/announcement/add-announcement/add-announcement.component';
import { DeleteAnnouncementComponent } from './components/Petitioner/announcement/delete-announcement/delete-announcement.component';
import { EditAnnouncementComponent } from './components/Petitioner/announcement/edit-announcement/edit-announcement.component';
import { AnnouncementsJobsComponent } from './components/Postulant/AnnouncementJobs/announcements-jobs/announcements-jobs.component';
import { DialogEditProfileComponent } from './components/Postulant/dialog-edit-profile/dialog-edit-profile.component';








@NgModule({
  declarations: [
    AppComponent,
    MenuPostulantComponent,
    ProfilePostulantComponent,
    ProjectComponent,
    ProjectEditComponent,
    ProjectAddComponent,
    ProjectDeleteComponent,
    MenuPetitionerComponent,
    ProfilePetitionerComponent,
    AnnouncementComponent,
    ViewAnnouncementComponent,
    AddAnnouncementComponent,
    DeleteAnnouncementComponent,
    EditAnnouncementComponent,
    AnnouncementsJobsComponent,
    DialogEditProfileComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DemoMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
