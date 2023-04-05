// @ts-ignore
import { Component } from '@angular/core';
export type FormTyoe = 'sign-in'| 'sign-up';
// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  form: FormTyoe = 'sign-in';

  get showFormSignIn() {
    return this.form === 'sign-in';
  }

  get showFormSignUp() {
    return this.form === 'sign-up';
  }

  toggleEditor(type: FormTyoe) {
    this.form = type;
  }
}
