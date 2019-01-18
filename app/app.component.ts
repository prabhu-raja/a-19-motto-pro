import { 
  Component, ComponentRef,
  ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';

import { AuthFormComponent } from "./auth-form/auth-form.component";
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <!--
      <auth-form 
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">
          Join us
        </button>
      </auth-form>
      -->
      <button (click)="destroyCmpt()">destroy🔥</button>
      <div #entry></div>
      <button (click)="moveCmpt()">Move</button>
      <p>happy</p>
   
  `
})
export class AppComponent implements AfterContentInit {
  cmpt: ComponentRef<AuthFormComponent>;
  cmpt2: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', {read: ViewContainerRef}) vcEntry: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    const authFormFactory = this.cfr.resolveComponentFactory(AuthFormComponent);
    this.cmpt2 = this.vcEntry.createComponent(authFormFactory);
    this.cmpt2.instance.title = 'Im 2';
    this.cmpt = this.vcEntry.createComponent(authFormFactory);
    //
    this.cmpt.instance.title = 'Create an Account';
    /*
    cmpt.instance.submitted
      .subscribe((data: User) => {
        console.log(data);
      });
    */
   this.cmpt.instance.submitted.subscribe(this.loginUser);
  }
  
  destroyCmpt() {
    this.cmpt.destroy();
  }

  moveCmpt() {
    this.vcEntry.move(this.cmpt.hostView, 0);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}