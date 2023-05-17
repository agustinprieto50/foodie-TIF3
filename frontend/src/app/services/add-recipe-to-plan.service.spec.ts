import { TestBed } from '@angular/core/testing';

import { AddRecipeToPlanService } from './add-recipe-to-plan.service';

describe('AddRecipeToPlanService', () => {
  let service: AddRecipeToPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRecipeToPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
