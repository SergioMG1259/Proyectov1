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





@NgModule({
  declarations: [
    AppComponent,
    MenuPostulantComponent,
    ProfilePostulantComponent,
    ProjectComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
