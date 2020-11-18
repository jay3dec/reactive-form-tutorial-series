import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required, this.amperSandValidator]],
    lastName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    gender: ['', [Validators.required]]
  });

  amperSandValidator(control: FormControl) { (1)
    let name = control.value;
    if (name && name.length > 0 && name.indexOf("&") != -1) {
      return {
        amperSandError: {
          enteredName: name
        }
      }
    }
    return null;
  }

  saveForm() {
    if (this.profileForm.valid) {
      console.log('Profile form data :: ', this.profileForm.value);
    }
  }

}
