import { Component, OnInit } from '@angular/core';
import {ProjectComponent} from "../Project/project/project.component";
import {Postulant} from "../model/postulant";
import {PostulantServices} from "../services/Postulant-services";


@Component({
  selector: 'app-profile-postulant',
  templateUrl: './profile-postulant.component.html',
  styleUrls: ['./profile-postulant.component.css']
})
export class ProfilePostulantComponent implements OnInit {
  postulantData:Postulant;
  projects:any
  constructor(private postulantService:PostulantServices) {
    this.postulantData={} as Postulant ;
   // this.onj=this.getOnePostulant()
    this.getOnePostulant()
    this.projects = Array(5).fill(4)
  }

  ngOnInit(): void {

  }
  getAllPostulant(){
    this.postulantService.getAll().subscribe((response:any)=>{
      console.log(response)
    })
  }
  getOnePostulant(){
    this.postulantService.getById(1).subscribe((response)=>{
      this.postulantData=response
      console.log(this.postulantData)
      console.log(this.postulantData.myname)
      console.log(typeof(response))
    })
  }

}
