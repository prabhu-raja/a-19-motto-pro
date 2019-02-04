import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Mail } from "../../models/mail.interface";

@Component({
    selector: 'mail-view',
    styleUrls: ['mail-view.component.scss'],
    template: `
        <div class="mail-view">
            <h2>{{ (msg | async).from }}</h2>
            <p>{{ (msg | async).full }}</p>
        </div>
    `
})
export class MailViewComponent {
    msg: Observable<Mail> = this.actRoute.data.pluck('propMsg')
    constructor(private actRoute: ActivatedRoute) { }

}