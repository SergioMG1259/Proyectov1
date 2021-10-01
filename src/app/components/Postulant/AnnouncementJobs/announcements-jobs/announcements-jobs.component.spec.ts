import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsJobsComponent } from './announcements-jobs.component';

describe('AnnouncementsJobsComponent', () => {
  let component: AnnouncementsJobsComponent;
  let fixture: ComponentFixture<AnnouncementsJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementsJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
