import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailViewComponent } from "./components/mail-view/mail-view.component";

import { MailService } from "./mail.service";
import { MailFolderResolve } from "./containers/mail-folder/mail-folder.resolve";


export const ROUTES: Routes = [
  { 
    path: 'folder/:pname',
    component: MailFolderComponent,
    resolve: {
      propMessages: MailFolderResolve
    }
  },
  {
    path: 'message/:mid',
    component: MailViewComponent,
    outlet: 'pane'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent
  ],
  providers: [
    MailService,
    MailFolderResolve
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
