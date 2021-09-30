import {Component, Inject, OnInit} from '@angular/core';
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
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Project) {
    this.title_edit=data.title
    this.description_edition=data.description
  }

  ngOnInit(): void {
  }

}
