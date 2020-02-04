import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  EmbeddedViewRef
} from "@angular/core";

@Directive({
  selector: "[ngLet]"
})
export class LetDirective {
  _value: any;
  _ref: EmbeddedViewRef<NgLetContext>;
  context: any = {};

  @Input()
  set ngLet(value: any) {
    // save context to local variable
    this._value = value;

    // if embeadded view doesn't exist yet create it (only once)
    if (!this._ref)
      this.createView();

    // if value is empty destroy the component
    // here it's acctualy works like ngIf (will rerender on non-empty value)
    if (!value) {
      this._ref.destroy();
      this._ref = undefined;

      return;
    }

    // set the context to the value
    this.context.$implicit = this.context.ngLet = value;
  }

  get ngLet(): any {
    return this._value;
  }

  constructor(
    private readonly vcRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>
  ) {}

  createView(): void {
    this.vcRef.clear();
    this._ref = this.vcRef.createEmbeddedView(this.templateRef, this.context);
  }
}

export class NgLetContext {
  constructor(public $implicit: any) {}
}
