import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet 
        (activate)="onActivate($event)" 
        (deactivate)="onDeactivate($event)">
      </router-outlet>
    </div>
  `
})
export class MailAppComponent {
  onActivate(evt) {
    console.log('act :', evt);
  }

  onDeactivate(evt) {
    console.log('deact :', evt);
  }
}
