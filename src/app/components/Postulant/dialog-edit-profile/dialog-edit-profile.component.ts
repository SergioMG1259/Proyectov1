import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Postulant} from "../model/postulant";
import {PostulantServices} from "../services/Postulant-services";

@Component({
  selector: 'app-dialog-edit-profile',
  templateUrl: './dialog-edit-profile.component.html',
  styleUrls: ['./dialog-edit-profile.component.css']
})
export class DialogEditProfileComponent implements OnInit {
  id_profile_edit:number
  name_edit:string
  lastname_edit:string
  info_edit:string
  speciality_edit:string
  experience_edit:string
  img_edit:string
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Postulant,private editProfile:PostulantServices) {
    this.id_profile_edit=data.id
    this.name_edit=""
    this.lastname_edit=""
    this.info_edit=""
    this.speciality_edit=""
    this.experience_edit=""
    this.img_edit=""
  }

  ngOnInit(): void {
  }
  EditProfilePostulant(){
    const submitEdition = {
      myname:this.name_edit,
      lastname:this.lastname_edit,
      myinfo:this.info_edit,
      myespeciality:this.speciality_edit,
      myexperience:this.experience_edit,
      img:this.img_edit
    };
    this.editProfile.editProfile(this.id_profile_edit,submitEdition).subscribe(response=>{
      console.log(response)
    })
  }

}
