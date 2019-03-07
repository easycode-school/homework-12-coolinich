import { TestBed } from '@angular/core/testing';

import { ImageModalService } from './image-modal.service';

describe('ImageModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageModalService = TestBed.get(ImageModalService);
    expect(service).toBeTruthy();
  });
});
