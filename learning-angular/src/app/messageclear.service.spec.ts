import { TestBed } from '@angular/core/testing';

import { MessageclearService } from './messageclear.service';

describe('MessageclearService', () => {
  let service: MessageclearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageclearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
