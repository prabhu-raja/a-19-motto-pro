import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from "./filesize.pipe";

interface File {
  name: string,
  size: any,
  type: string
}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div *ngFor="let file of mappedFiles">
        <p>{{ file.name }}</p>
        <!--<p>{{ file.size | filesize: ' Megabytes' }}</p>-->
        <p>{{ file.size }}</p>
      </div>
    </div>
  `,
  providers:[ 
    FileSizePipe
  ]
})
export class AppComponent implements OnInit {
  files: File[];
  mappedFiles: File[];

  constructor(private sizePipe: FileSizePipe) { }

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];
    //
    this.mappedFiles = this.files.map(file => {
      return { 
        name: file.name,
        type: file.type,
        size: this.sizePipe.transform(file.size, ' mb')
      }
    });
  }

}
``