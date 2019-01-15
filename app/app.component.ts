import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';

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
        <button type="submit">Join us</button>
      </auth-form>
      -->
      <!-- -->
      <div #refEntry>
      </div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('refEntry', {read: ViewContainerRef}) vcEntry: ViewContainerRef;

  rememberMe: boolean = false;

  constructor(private cfResolver: ComponentFactoryResolver) { }

 
  ngAfterContentInit() {
    console.log('ACI :', 'ACI');

    const authFormFactory = this.cfResolver.resolveComponentFactory(AuthFormComponent);
    const cmpt = this.vcEntry.createComponent(authFormFactory);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}