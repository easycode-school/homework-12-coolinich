import { TestBed } from '@angular/core/testing';

import { ChallengesServiceService } from './challenges-service.service';

describe('ChallengesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallengesServiceService = TestBed.get(ChallengesServiceService);
    expect(service).toBeTruthy();
  });
});
