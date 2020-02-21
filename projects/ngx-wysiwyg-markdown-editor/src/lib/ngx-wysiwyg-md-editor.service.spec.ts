import { TestBed } from '@angular/core/testing';

import { NgxWysiwygMdEditorService } from './ngx-wysiwyg-md-editor.service';

describe('NgxWysiwygMdEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxWysiwygMdEditorService = TestBed.get(NgxWysiwygMdEditorService);
    expect(service).toBeTruthy();
  });
});
