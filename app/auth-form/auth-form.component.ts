import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AuthRemeberComponent } from "./auth-remember.component";
import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>

        <!--Remember Starts -->
        <ng-content select="auth-remember"></ng-content>
        <div *ngIf="showRememberMsg">
          You will be loggedin for 30 days🥰
        </div>
        <!--Remember Starts -->

        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit {
  showRememberMsg: boolean = false;

  @ContentChildren(AuthRemeberComponent) ccRemeber: QueryList<AuthRemeberComponent>;

  @Output() 
  submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit() {
    if(this.ccRemeber) {
      console.log('dd', this.ccRemeber); 
      this.ccRemeber.forEach((itm) => {
        itm.checked
          .subscribe((chkd: boolean) => this.showRememberMsg = chkd);
      })
      // this.ccRemeber.checked
      //     .subscribe((chkd: boolean) => this.showRememberMsg = chkd);
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
