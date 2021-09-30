import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewProject } from './newProject';
import { ProjectsServices } from '../../services/Projects-services';
import { Project } from '../../Project/model/project';

@Component({
  selector: 'app-addProject',
  templateUrl: './addProject.component.html',
  styleUrls: ['./addProject.component.css']
})
export class AddProjectComponent implements OnInit {
  project: Project
  myprojects:any
  lastProject:any
  onAdd= new EventEmitter();
  @Output()
  projecAdded!: EventEmitter<string>;
  constructor(private DataService:ProjectsServices) {
    this.project = {} as NewProject;
    this.project.id=1;
    this.project.idown=1;
    this.project.evidence="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EQgC5SyUMBB-yO5WK6gXof_DbQLdFdSYRw&usqp=CAU"
    this.project.img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EQgC5SyUMBB-yO5WK6gXof_DbQLdFdSYRw&usqp=CAU";
    this.project.linktogithub=" ";
    this.getIdForNewProject();
    this.projecAdded = new EventEmitter();


  }

  sendNewProject(){
    console.log(this.project)
    this.DataService.addProyect(this.project.id,this.project)
    //this.projecAdded.emit(this.lastProject.id+1);
    this.onAdd.emit();
  }

  refreshTheData(){
    this.onAdd.emit();
  }

  getIdForNewProject(){

    this.DataService.getByOwner(1).subscribe(response=>{
      this.myprojects=response
      this.project.id=this.myprojects[this.myprojects.length-1].id +1
    })
  }

  ngOnInit() {
  }

}
