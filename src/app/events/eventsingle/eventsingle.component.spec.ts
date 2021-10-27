import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsingleComponent } from './eventsingle.component';

describe('EventsingleComponent', () => {
  let component: EventsingleComponent;
  let fixture: ComponentFixture<EventsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
