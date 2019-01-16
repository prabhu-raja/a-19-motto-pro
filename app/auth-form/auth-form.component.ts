import { 
  Component, Output, EventEmitter, 
  ContentChild, AfterContentInit,
  ViewChild, AfterViewInit, 
  ChangeDetectorRef } from '@angular/core';
  
import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from './auth-message.component';
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
        <ng-content select="auth-remember"></ng-content>

        <auth-message [style.display]="(showMsg ? 'inherit' : 'none')"></auth-message>

        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMsg: boolean = false;

  @ViewChild(AuthMessageComponent) vcMessage: AuthMessageComponent;
  @ContentChild(AuthRememberComponent) ccRemember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cdr: ChangeDetectorRef) { }
  
  ngAfterViewInit() {
    // this.vcMessage.days= 30;

    /*
    setTimeout(() => {
      this.vcMessage.days = 30;
    });
    */
    this.vcMessage.days = 30;
    this.cdr.detectChanges(); // calling Angular to detect chnages
  }

  ngAfterContentInit() {
    /*
    if(this.vcMessage) {
      this.vcMessage.days= 30;
    }
    */
    //
    if(this.ccRemember) {
      this.ccRemember.checked.subscribe((itm: boolean) => this.showMsg = itm);
    }
  }


  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
