import { Component, OnInit } from '@angular/core';
import {ProjectComponent} from "../Project/project/project.component";
import {Postulant} from "../model/postulant";
import {PostulantServices} from "../services/Postulant-services";
import {ProjectsServices} from "../services/Projects-services";
import {MatDialog} from "@angular/material/dialog";
import {Project} from "../Project/model/project";
import {ProjectEditComponent} from "../Project/project-edit/project-edit.component";
import {MatGridListModule} from '@angular/material/grid-list';
import { AddProjectComponent } from './addProject/addProject.component';



@Component({
  selector: 'app-profile-postulant',
  templateUrl: './profile-postulant.component.html',
  styleUrls: ['./profile-postulant.component.css']
})
export class ProfilePostulantComponent implements OnInit {
  postulantData:Postulant;
  projects:any
  myprojects:any
  asdad:ProjectComponent
  constructor(private postulantService:PostulantServices,private proyec:ProjectsServices,public dialog:MatDialog) {
    this.postulantData={} as Postulant ;
    this.asdad={} as ProjectComponent
   // this.onj=this.getOnePostulant()
    this.getOnePostulant()
    //this.projects = Array(5).fill(4)
    this.getMyProjectsown()
  }

  ngOnInit(): void {

  }
  getAllPostulant(){
    this.postulantService.getAll().subscribe((response:any)=>{
      console.log(response)
    })
  }
  getOnePostulant(){
    this.postulantService.getById(1).subscribe(response=>{
      this.postulantData=response
      console.log(response)

    })
  }
  getMyProjectsown(){

    this.proyec.getByOwner(1).subscribe(response=>{
      this.myprojects=response
      console.log(this.myprojects)
      console.log(this.myprojects[0])
    })
  }
  loockProject(pro:Project){
    const dialogRef=this.dialog.open(ProjectComponent,{data:pro});
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res)
    })
  }
  editProject(pro:Project){
    const dialogRef=this.dialog.open(ProjectEditComponent,{data:pro})
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res)
    })
  }

  onOpenDialogAddProjectClick(){
    let dialogAdd= this.dialog.open(AddProjectComponent)
    const sub= dialogAdd.componentInstance.onAdd.subscribe(()=>{
      console.log("Data refrescada");
      this.getMyProjectsown();
    });
    dialogAdd.afterClosed().subscribe(res=>{
      console.log(res)
    })
  }


}
