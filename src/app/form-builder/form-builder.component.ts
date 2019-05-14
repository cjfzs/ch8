import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  // static required(c: FormControl): StringMap<string, boolean> {
  //   return isBlank(c.value) || c.value == "" ? { "required": true } : null;
  // }
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required, usernameValidator])],
      'password': ['', Validators.compose([])],
      'test': ['', Validators.compose([])]
    });
    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];
    // this.username.valueChanges.subscribe(
    //   (value: string) => {
    //     console.log('用户名是:', value);
    //   });
    // this.myForm.valueChanges.subscribe(
    //   (form: any) => {
    //     console.log('form changed to:', form);
    //   });
  }

  ngOnInit() {
  }
  onSubmit(value: string): void {
    console.log('you submitted value:', value);
  }
}
function usernameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidusername: false };
  }
}
