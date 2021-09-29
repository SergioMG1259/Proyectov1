import { Component, OnInit } from '@angular/core';
import {DemoMaterialModule} from "../../../../material-module";

@Component({
  selector: 'app-menu-postulant',
  templateUrl: './menu-postulant.component.html',
  styleUrls: ['./menu-postulant.component.css']
})
export class MenuPostulantComponent implements OnInit {
  public isMenuOpen: boolean = false;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
