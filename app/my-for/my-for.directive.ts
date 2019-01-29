import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
    selector: '[myFor][myForOf]'
})
export class MyForDirective {
    @Input()
    set myForOf(coll) {
        this.vcRef.clear();
        coll.forEach((item, index) => {
            this.vcRef.createEmbeddedView(this.tRef, {
                $implicit: item,
                index,
                age: item.age
            })
        });
    }

    constructor(private vcRef: ViewContainerRef, private tRef: TemplateRef<any>) { }
}