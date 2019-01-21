import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container 
        [ngTemplateOutlet]="test ? tmpl : tmpl2" 
        [ngTemplateOutletContext]="ctx"> 
      </ng-container>
      
      <template let-name let-place="location" #tmpl>
        {{name}}, {{place}}
      </template>

      <template #tmpl2>
        Prabhu Raja, Brampton
      </template>
    </div>
  `
})
export class AppComponent  {
  test: boolean = true;
  ctx = {
    $implicit: 'My Name',
    location: 'My Location'
  }
  
}