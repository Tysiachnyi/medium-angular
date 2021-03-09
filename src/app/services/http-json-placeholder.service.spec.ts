import {TestBed} from '@angular/core/testing';

import {HttpJsonPlaceholderService} from './http-json-placeholder.service';

describe('HttpJsonPlaceholderService', () => {
  let service: HttpJsonPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpJsonPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
