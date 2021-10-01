import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Announcement} from "../model/announcement";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  Name_A:string
  title_A:string
  info_Job_A: string
  speciality_A:string
  experience_A:string
  salary_A:number
  salary_type_A:string
  date_A:string
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data: Announcement) {
    this.Name_A=data.petitionerName
    this.title_A=data.titleAnnouncement
    this.info_Job_A=data.infoJob
    this.speciality_A=data.speciality
    this.experience_A=data.experience
    this.salary_A=data.salary
    this.salary_type_A=data.salary_type
    this.date_A=data.date
  }

  ngOnInit(): void {
  }

}
