import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { Mail } from "../../models/mail.interface";
import { MailService } from "../../mail.service";

@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> {

    constructor(private mailService: MailService) { }

    resolve(ars: ActivatedRouteSnapshot) {
        console.log('mm', ars);
        return this.mailService.getFolder(ars.params.pname);
    }
}