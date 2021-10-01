import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPetitionerComponent } from './menu-petitioner.component';

describe('MenuPetitionerComponent', () => {
  let component: MenuPetitionerComponent;
  let fixture: ComponentFixture<MenuPetitionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPetitionerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPetitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
