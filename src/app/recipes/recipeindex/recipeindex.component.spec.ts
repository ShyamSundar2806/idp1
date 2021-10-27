import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeindexComponent } from './recipeindex.component';

describe('RecipeindexComponent', () => {
  let component: RecipeindexComponent;
  let fixture: ComponentFixture<RecipeindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
