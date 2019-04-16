import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  templateUrl: './mail-item.component.html'
})
export class MailItemComponent {
  @Input()
  message: Mail;

  constructor(private router: Router) { }

  navigateToMessage() {
    this.router.navigate(['/mail',
      {
        outlets: {
          pane: ["message", this.message.id]
        }
      }
    ]);
  }
}
