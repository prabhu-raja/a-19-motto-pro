import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  templateUrl: './mail-item.component.html'
})
export class MailItemComponent {
  @Input()
  message: Mail;
}
