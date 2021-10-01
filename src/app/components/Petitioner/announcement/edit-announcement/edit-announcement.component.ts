import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Announcement} from "../model/announcement";
import {AnnouncementServices} from "../../../Postulant/services/Announcement-services";

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {
  id_edit:number
  tittle_edit:string
  speciality_edit:string
  experience_edit:string
  infoJob_edit:string
  salary_edit:any
  salary_type_edit:string
  visible_edit:any
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Announcement,private edit:AnnouncementServices) {
    this.id_edit=data.id
    this.tittle_edit=""
    this.speciality_edit=""
    this.experience_edit=""
    this.infoJob_edit=""
    this.salary_type_edit=""
  }

  ngOnInit(): void {
  }
  editAnnouncement(){
    const submitEdition = {
      titleAnnouncement: this.tittle_edit,
      speciality:this.speciality_edit,
      experience:this.experience_edit,
      infoJob:this.infoJob_edit,
      salary:this.salary_edit,
      salary_type:this.salary_type_edit,
      visible:this.visible_edit
    };
    this.edit.setAnnouncement(this.id_edit,submitEdition) .subscribe(response=>{
      console.log(response)
    })
  }

}
