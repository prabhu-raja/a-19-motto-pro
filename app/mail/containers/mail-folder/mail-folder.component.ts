import { Component, OnInit } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/pluck';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{title | async}}</h2>
    <!--p>{{data | json}}</p>-->

    <mail-item
      *ngFor="let message of (propMessages | async)"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent implements OnInit {

  // data: Observable<{ propMessages: Mail[] }> = this.actRoute.data;
  propMessages: Observable<Mail[]> = this.actRoute.data.pluck('propMessages');
  title: Observable<string> = this.actRoute.params.pluck('pname');

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.actRoute.params.subscribe(data => console.log('nn', data));
  }
}
