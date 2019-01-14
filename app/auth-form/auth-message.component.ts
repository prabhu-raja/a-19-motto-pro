import { Component } from "@angular/core";

@Component({
    selector: 'auth-message',
    template: `
        <div>
            You will be logged in {{days}} days😇
        </div>
    `
})
export class AuthMessageComponent {
    days: number = 7;
}