import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeToPlanModalComponent } from './add-recipe-to-plan-modal.component';

describe('AddRecipeToPlanModalComponent', () => {
  let component: AddRecipeToPlanModalComponent;
  let fixture: ComponentFixture<AddRecipeToPlanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipeToPlanModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecipeToPlanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
