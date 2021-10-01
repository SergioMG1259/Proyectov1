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

  constructor(public dialog:MatDialog) {

  }

  ngOnInit(): void {
  }

}
