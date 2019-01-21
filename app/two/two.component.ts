import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-two',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
    .example-two {
      background: blue;
      font-size: 19px;
      color: black;
      margin-bottom: 10px;
      padding: 5px 7px;
    }
    
    .example-one {
      border: 3px solid red;
      font-size: 14px;
      color: red;
      padding: 5px 7px;
    }
    
  `],
  template: `
    <div class="example-two">
      Example Two
    </div>
    <div class="example-one">
      Example One!
    </div>
  `
})
export class ExampleTwoComponent {

}
