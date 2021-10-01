import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-petitioner',
  templateUrl: './menu-petitioner.component.html',
  styleUrls: ['./menu-petitioner.component.css']
})
export class MenuPetitionerComponent implements OnInit {
  public isMenuOpen: boolean = false;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
