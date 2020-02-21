import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWysiwygMdEditorComponent } from './ngx-wysiwyg-md-editor.component';

describe('NgxWysiwygMdEditorComponent', () => {
  let component: NgxWysiwygMdEditorComponent;
  let fixture: ComponentFixture<NgxWysiwygMdEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWysiwygMdEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWysiwygMdEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
