import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Project} from "../model/project";
import {Postulant} from "../../model/postulant";
import {ProjectsServices} from "../../services/Projects-services";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  projects:any
  id_postulant_add:number
  data_proyect:any
  id_add:number
  title_add:string
  description_add:string
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Postulant,private edit:ProjectsServices) {
    this.id_postulant_add=data.id
    this.id_add=0
    this.title_add=""
    this.description_add=""
  }

  ngOnInit(): void {
  }
  AddProyect(){
    const submitEdition = {
      id: this.id_postulant_add,

    };
  }
  add_project(){

    this.edit.returnId_for_Add().subscribe(response=>{
     this.projects=response
      const a=this.projects[this.projects.length-1].id
      this.id_add=a
      console.log(this.projects[a-1].id)
      console.log(typeof(this.id_add))
      console.log(this.id_add)
    })
   this.data_proyect={
      id:this.id_add,
      title: this.title_add,
      description: this.description_add,
      idown: this.id_postulant_add,
      linktogithub: " ",
      evidence: "https://images.ctfassets.net/lzny33ho1g45/learn-html-css-p-img/12978ef50623cf76538cfe18e1011fc5/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
      img: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
    }
    this.edit.AddProject(this.data_proyect).subscribe(response=>{
      console.log(response)
    })
  }
}
