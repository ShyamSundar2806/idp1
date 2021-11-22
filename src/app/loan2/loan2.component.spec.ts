import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loan2Component } from './loan2.component';

describe('Loan2Component', () => {
  let component: Loan2Component;
  let fixture: ComponentFixture<Loan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loan2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Loan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
