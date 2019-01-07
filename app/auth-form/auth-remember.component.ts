import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'auth-remember',
    template: `
    <label>
        <input type="checkbox" (change)="rememberChanged($event.target.checked)">
        Keep me logged in
    </label>
    `
})
export class AuthRemeberComponent {
    @Output()
    checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    rememberChanged(val: boolean) {
        this.checked.emit(val);
    }
}