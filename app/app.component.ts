import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container [ngTemplateOutlet]="test ? tmpl : tmpl2">
      </ng-container>
      <!-- -->
      <template #tmpl>
        PR, Salem
      </template>

      <template #tmpl2>
        Prabhu Raja, Brampton
      </template>
    </div>
  `
})
export class AppComponent  {
  test: boolean = true;
}