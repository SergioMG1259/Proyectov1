import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Project} from "../../model/project";
import {ProjectsServices} from "../../../services/Projects-services";

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {
  id_delete:number
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Project, private deleteproject:ProjectsServices) {
    this.id_delete=data.id
  }

  ngOnInit(): void {
  }
  delete_this_project(){
    this.deleteproject.DeleteProject(this.id_delete).subscribe(response=>{
      console.log(response)
    })
  }
}
