import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePetitionerComponent } from './profile-petitioner.component';

describe('ProfilePetitionerComponent', () => {
  let component: ProfilePetitionerComponent;
  let fixture: ComponentFixture<ProfilePetitionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePetitionerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePetitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
