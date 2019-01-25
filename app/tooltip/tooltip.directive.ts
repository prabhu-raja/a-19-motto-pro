import { Directive, OnInit, Input, ElementRef } from "@angular/core";

@Directive({
    selector: '[tooltip]',
    exportAs: 'global'
})
export class TooltipDirective implements OnInit {

    tooltipElement = document.createElement('div');
    visible: boolean = false;

    @Input()
    set tooltip(val: string) {
        this.tooltipElement.textContent = val;
    }

    hide() {
        this.tooltipElement.classList.remove('tooltip--active');
    }
    
    show() {
        this.tooltipElement.classList.add('tooltip--active');
    }

    constructor(private elmRef: ElementRef) { }

    ngOnInit() {
        this.tooltipElement.className = 'tooltip';
        this.elmRef.nativeElement.appendChild(this.tooltipElement);
        this.elmRef.nativeElement.classList.add('tooltip-container');
    }
}