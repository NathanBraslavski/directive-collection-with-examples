import { Directive, Input, TemplateRef, ViewContainerRef, EmbeddedViewRef } from '@angular/core';

@Directive({
    selector: '[ngLet]'
})
export class LetDirective {
    _value: any;
    _ref: EmbeddedViewRef<NgLetContext>;
    context: any = {};

    @Input()
    set ngLet(context: any) {
        this._value = context;
        
        if (!this._ref) {
            this.updateView();
        }

        if (!context) {
            this._ref.destroy();
            this._ref = undefined;

            return;
        }

        this.context.$implicit = this.context.ngLet = context;
    }

    get ngLet(): any {
      return this._value;
    }

    constructor(
      private readonly vcRef: ViewContainerRef,
      private readonly templateRef: TemplateRef<any>) { }

    updateView(): void {
        this.vcRef.clear();
        this._ref = this.vcRef.createEmbeddedView(this.templateRef, this.context);
    }


}

export class NgLetContext {
    constructor(public $implicit: any) { }
}