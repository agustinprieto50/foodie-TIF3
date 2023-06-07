import { TestBed } from '@angular/core/testing';

import { CreateShippingOrderService } from './create-shipping-order.service';

describe('CreateShippingOrderService', () => {
  let service: CreateShippingOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateShippingOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
