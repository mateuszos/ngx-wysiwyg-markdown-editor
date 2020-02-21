import { Directive, OnInit, Input, Output, OnDestroy, EventEmitter, ElementRef, HostBinding } from '@angular/core';
import Editor from 'tui-editor';

@Directive({
  selector: 'ngxWysiwygMdEditor, [ngxWysiwygMdEditor]'
})
export class WysiwygMdEditorDirective implements OnInit, OnDestroy {
  public editor: Editor;
  public defaults: any; // type available options
  @Input() public initialValue: string;
  @Input() public editType: string;
  @Input() public height: string;
  @Input() public previewStyle: string;
  @Output() public valueChange: EventEmitter<string> = new EventEmitter();
  @HostBinding('style.display') display = 'block';

  constructor(
    private element: ElementRef,
  ) {
    this.defaults = {
      el: this.element.nativeElement,
      initialValue: '',
      initialEditType: 'wysiwyg',
      previewStyle: 'vertical',
      height: '300px'
    };
  }

  ngOnInit() {
    const options = Object.assign(this.defaults, {
      initialValue: this.initialValue || this.defaults.initialValue,
      initialEditType: this.editType || this.defaults.initialEditType,
      height: this.height || this.defaults.height,
      previewStyle: this.previewStyle || this.defaults.previewStyle,
    });

    this.editor = new Editor(options);
    this.editor.on('change', () => {
      this.valueChange.emit(this.editor.getValue());
    });
  }

  ngOnDestroy() {
    this.editor.off('change');
    this.editor.remove();
  }

}
