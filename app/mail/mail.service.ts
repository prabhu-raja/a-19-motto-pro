import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Mail } from "./models/mail.interface";

import 'rxjs/add/operator/map';

@Injectable()
export class MailService {

    constructor(private http: Http) { }

    getFolder(folderName: string): Observable<Mail[]> {
        return this.http
        .get(`/api/messages?folder=${folderName}`)
            .map(resp => resp.json());
    }
}
