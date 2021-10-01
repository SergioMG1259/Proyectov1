import { Component, OnInit } from '@angular/core';
import {Petitioner} from "../model/petitioner";
import {PetitionersServices} from "../../Postulant/services/Petitioner-services";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-profile-petitioner',
  templateUrl: './profile-petitioner.component.html',
  styleUrls: ['./profile-petitioner.component.css']
})
export class ProfilePetitionerComponent implements OnInit {
  data_petitioner:Petitioner
  constructor(private petitionerService:PetitionersServices) {
    this.data_petitioner={} as Petitioner
    this.GetOnePetitioner()
  }

  ngOnInit(): void {
  }
  GetOnePetitioner(){
    this.petitionerService.getpetitioner(1).subscribe(response=>{
      this.data_petitioner=response
      console.log(response)

    })
  }

}
