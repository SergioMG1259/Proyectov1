import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Announcement} from "../model/announcement";
import {AnnouncementServices} from "../../../Postulant/services/Announcement-services";



@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {
  Announcements:any
  data_Announcement:any
  Id_add:number
  tittle_add:string
  speciality_add:string
  experience_add:string
  infoJob_add:string
  salary_add:any
  salary_type_add:string
  visible_add:any
  constructor(public dialog:MatDialog,private add:AnnouncementServices) {
    this.Id_add=0
    this.tittle_add=""
    this.speciality_add=""
    this.experience_add=""
    this.infoJob_add=""
    this.salary_type_add=""
  }

  ngOnInit(): void {
  }
  Add_Announcement(){
    this.add.getAllAnnouncements().subscribe(response=>{
      this.Announcements=response
      this.Id_add=this.Announcements[this.Announcements.length-1].id

    })
    this.data_Announcement={

      id: this.Id_add,
      titleAnnouncement: this.tittle_add,
      petitionerName: "Google",
      id_petitioner: 1,
      speciality: this.speciality_add,
      experience: this.experience_add,
      infoJob: this.infoJob_add,
      date: "18-09-2021",
      salary: this.salary_add,
      salary_type: this.salary_type_add,
      visible: this.visible_add,
      postulants: []
    }

    this.add.postAnnouncement(this.data_Announcement).subscribe(response=>{
      console.log(response)
    })
  }


}
