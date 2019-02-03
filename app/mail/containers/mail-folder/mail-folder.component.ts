import { Component, OnInit } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>Inbox</h2>
    <p>{{data | json}}</p>
   <!--
    <mail-item
      *ngFor="let message of messages"
      [message]="message">
    </mail-item>
    -->
  `
})
export class MailFolderComponent implements OnInit {
    
  data: Observable<{ propMessages: Mail[] }> = this.actRoute.data;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(data => console.log('nn', data));
  }
}
