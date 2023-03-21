import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  singUpForm: FormGroup;
  constructor(private  formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.singUpForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]]
    }), {validator: this.ConfirmedValidator('password', 'confirmPassword')};
  }
  get email(){
    return this.singUpForm.get('email');
  }
  get password(){
    return this.singUpForm.get('password');
  }
  get confirmPassword() {
    return this.singUpForm.get('confirmPassword');
  }
  get country(){
    return this.singUpForm.get('country');
  }
  get age(){
    return this.singUpForm.get('age');
  }
  get gender(){
    return this.singUpForm.get('gender');
  }
  get phone(){
    return this.singUpForm.get('phone');
  }

  private ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
