import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[credit-card]'
})
export class CreditCardDirective {

    @HostBinding('style.border')
    myBorder: string;
    
    @HostListener('input', ['$event'])
    myKeydown(evt: KeyboardEvent) {
        const ip = evt.target as HTMLInputElement;
        //
        let trimmed = ip.value.replace(/\s+/g, '');
        if(trimmed.length > 16) {
            trimmed = trimmed.substr(0, 16);
        }
        //
        let numbers = [];
        for (let i = 0; i < trimmed.length; i+= 4) {
            numbers.push(trimmed.substr(i, 4));
        }
        //
        ip.value = numbers.join(' ');

        //
        this.myBorder = '';
        if(/[^\d]+/.test(trimmed)) {
            this.myBorder = '1px solid red';
        }
    }
}