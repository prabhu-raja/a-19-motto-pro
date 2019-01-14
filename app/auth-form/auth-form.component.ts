import { Component, Output, EventEmitter, 
          ViewChild, AfterViewInit,
          ContentChildren,  AfterContentInit, 
          QueryList, ChangeDetectorRef } from '@angular/core';

import { AuthMessageComponent } from "./auth-message.component";
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
        <auth-message 
          [style.display]="(showRememberMsg ? 'inherit' : 'none' )">
        </auth-message>
        <!--Remember Starts -->

        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showRememberMsg: boolean = false;

  @ViewChild(AuthMessageComponent) vcMsg: AuthMessageComponent;

  @ContentChildren(AuthRemeberComponent) ccRemeber: QueryList<AuthRemeberComponent>;

  @Output() 
  submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.vcMsg.days = 8;
    // });
    // Instead of using setTimeOut use ChangedetectorRef
    this.vcMsg.days = 8;
    this.cdr.detectChanges();
  }

  ngAfterContentInit() {
    // this.vcMsg.days = 8;
    if(this.ccRemeber) {
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
