import {Component, Inject, OnInit, Optional} from '@angular/core';
import {DemoMaterialModule} from "../../../../material-module";
import {AnnouncementServices} from "../../../Postulant/services/Announcement-services";
import {Announcement} from "../../announcement/model/announcement";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AddAnnouncementComponent} from "../../announcement/add-announcement/add-announcement.component";
import {DeleteAnnouncementComponent} from "../../announcement/delete-announcement/delete-announcement.component";
import {AnnouncementComponent} from "../../announcement/announcement/announcement.component";
import {EditAnnouncementComponent} from "../../announcement/edit-announcement/edit-announcement.component";

@Component({
  selector: 'app-view-announcement',
  templateUrl: './view-announcement.component.html',
  styleUrls: ['./view-announcement.component.css']
})
export class ViewAnnouncementComponent implements OnInit {
  My_announcements:any
  Announcement_add:Announcement
  constructor(private myannouncements:AnnouncementServices,public dialog:MatDialog) {
    this.Get_My_Announcements()
    this.Announcement_add={} as Announcement
  }

  ngOnInit(): void {
  }
  Get_My_Announcements(){
    this.myannouncements.getAnnouncementByPetitioner(1).subscribe(response=>{
      this.My_announcements=response
      console.log(response)
      console.log(this.My_announcements[0].infoJob)
    })
  }
  Open_Dialog_Add(){
    const dialogRef=this.dialog.open(AddAnnouncementComponent)
  }
  Open_Dialog_Delete(Ann:Announcement){
    const dialogRef=this.dialog.open(DeleteAnnouncementComponent,{data:Ann})
  }
  Open_Dialog_View_Announcement(Ann:Announcement){
    const dialogRef=this.dialog.open(AnnouncementComponent,{data:Ann})
  }
  Open_Dialo_Edit(Ann:Announcement){
    const dialogRef=this.dialog.open(EditAnnouncementComponent,{data:Ann})
  }

}
