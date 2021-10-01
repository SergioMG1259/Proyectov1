import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {DemoMaterialModule} from "../../../../material-module";
import {Project} from "../model/project";
import {ProjectsServices} from "../../services/Projects-services";
import {PostulantServices} from "../../services/Postulant-services";
import {Input} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Optional} from "@angular/core";


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  title_edit:string
  description_edition:string
  id_edit:number
  titleforedit:string
  img_edit:string
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Project, private edit:ProjectsServices) {
    this.title_edit=data.title
    this.description_edition=""
    this.id_edit=data.id
    this.titleforedit=""
    this.img_edit=""
  }
  editproyect(){
    const submitEdition = {
      title: this.titleforedit,
     description: this.description_edition,
      img:this.img_edit
    };
   this.edit.setproyect(this.id_edit,submitEdition) .subscribe(response=>{
      console.log(response)
    })
  }
  ngOnInit(): void {
  }
  @Output()sendalert=new EventEmitter<number>();
  send_alert() {
    this.sendalert.emit(1);
    console.log("funciona")
  }

}
