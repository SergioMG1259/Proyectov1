import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Announcement} from "../model/announcement";
import {AnnouncementServices} from "../../../Postulant/services/Announcement-services";

@Component({
  selector: 'app-delete-announcement',
  templateUrl: './delete-announcement.component.html',
  styleUrls: ['./delete-announcement.component.css']
})
export class DeleteAnnouncementComponent implements OnInit {
id_delete:number
  constructor(public dialog:MatDialog,@Optional() @Inject(MAT_DIALOG_DATA)public data:Announcement,private delete_announcement:AnnouncementServices) {
  this.id_delete=data.id
  }

  ngOnInit(): void {
  }
  Delete_Announcement(){
    this.delete_announcement.deleteAnnouncement(this.id_delete).subscribe(response=>{
      console.log(response)
    })
  }
}

