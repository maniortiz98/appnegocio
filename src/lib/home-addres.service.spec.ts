import { TestBed } from '@angular/core/testing';

import { HomeAddresService } from './home-addres.service';

describe('HomeAddresService', () => {
  let service: HomeAddresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeAddresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
