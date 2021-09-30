import {Component, Inject, OnInit} from '@angular/core';
import {DemoMaterialModule} from "../../../../material-module";
import {Project} from "../model/project";
import {ProjectsServices} from "../../services/Projects-services";
import {PostulantServices} from "../../services/Postulant-services";
import {Input} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() titleProject
  //constructor(/*private projectService:ProjectsServices*/) {
  //  this.titleProject="";
 //}
  constructor(public dialogRef: MatDialogRef<ProjectComponent>,@Inject(MAT_DIALOG_DATA)public message:string){
    this.titleProject=""
  }

  onclickNo() {
    //const dialogRef = this.dialog.open(ProjectComponent);
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

  /*getMyProjects(){
    this.projectService.getByOwner(1).subscribe(response=>{
      console.log(response)
    })
  }*/

}
