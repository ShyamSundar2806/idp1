import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loan1Component } from './loan1.component';

describe('Loan1Component', () => {
  let component: Loan1Component;
  let fixture: ComponentFixture<Loan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loan1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Loan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
