import { 
  Component,
  ViewChild, ViewContainerRef, AfterContentInit,
  TemplateRef } from '@angular/core';

import { AuthFormComponent } from "./auth-form/auth-form.component";
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <template #tmpl let-name let-city="location">
        {{name}}, {{city}}
      </template>
    </div>
   
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', {read: ViewContainerRef}) vcEntry: ViewContainerRef;
  @ViewChild('tmpl') vcTempl: TemplateRef<any>;

  ngAfterContentInit() {
    this.vcEntry.createEmbeddedView(this.vcTempl, {
      $implicit: 'Prabhu Raja',
      location: 'Brampton',
    });
  }

}