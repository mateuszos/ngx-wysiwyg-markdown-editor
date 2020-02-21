import { NgxWysiwygMdEditorModule } from './../../projects/ngx-wysiwyg-md-editor/src/lib/ngx-wysiwyg-md-editor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWysiwygMdEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
