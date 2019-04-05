import { TestBed } from '@angular/core/testing';

import { PostcategoryService } from './postcategory.service'

describe('PostcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostcategoryService = TestBed.get(PostcategoryService);
    expect(service).toBeTruthy();
  });
});
