import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
    selector: '[myFor][myForOf]'
})
export class MyForDirective {
    @Input()
    set myForOf(coll) {
        console.log(coll);
    }

    constructor(private vcRef: ViewContainerRef, private tRef: TemplateRef<any>) { }
}