/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   /** Minimum date allowed. */
   minDate = new Date(2000, 0, 1);
   /** Maximum date allowed. */
   maxDate = new Date();
   /** SignUp form. */
   signupForm: FormGroup;

  /**
   * @param FormBuilder formBuilder.
   */
  constructor(private formBuilder: FormBuilder, private authservice: AuthService) { }

  /**
   * Creates and sets Sign Up form
   */
  ngOnInit() {
    this.createSignUpForm();
  }

  createSignUpForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      dob: ['', Validators.required],
      agree: ['', Validators.required],
    });
  }

  submit() {
    this.authservice.registerUser({
      email: this.signupForm.controls.email.value,
      password: this.signupForm.controls.password.value
    })
  }

}
