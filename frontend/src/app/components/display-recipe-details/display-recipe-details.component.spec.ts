import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRecipeDetailsComponent } from './display-recipe-details.component';

describe('DisplayRecipeDetailsComponent', () => {
  let component: DisplayRecipeDetailsComponent;
  let fixture: ComponentFixture<DisplayRecipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRecipeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
