import { TestBed } from '@angular/core/testing';

import { TagUserModalService } from './tag-user-modal.service';

describe('ModalService', () => {
  let service: TagUserModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagUserModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
