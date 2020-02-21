import { NgModule } from '@angular/core';
import { NgxWysiwygMdEditorComponent } from './ngx-wysiwyg-md-editor.component';
import { WysiwygMdEditorDirective } from './ngx-wysiwyg-md-editor.directive';

@NgModule({
  declarations: [NgxWysiwygMdEditorComponent, WysiwygMdEditorDirective],
  imports: [
  ],
  exports: [NgxWysiwygMdEditorComponent, WysiwygMdEditorDirective]
})
export class NgxWysiwygMdEditorModule { }
