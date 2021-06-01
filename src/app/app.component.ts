import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private formBuilder:FormBuilder){}

 profileForm:FormGroup;
 ngOnInit(){
   this.profileForm = this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    address:[''],
    dob:['',[Validators.required]],
    gender:['',[Validators.required]]
  });

  this.profileForm.get('gender').valueChanges.subscribe(response => {
    if(response == "male"){
      this.profileForm.get('address').clearValidators();
      this.profileForm.get('address').updateValueAndValidity();
    } else {
      this.profileForm.get('address').setValidators(Validators.required);
      this.profileForm.get('address').updateValueAndValidity();
    }
  })
 }

 saveForm(){
   if(this.profileForm.valid){
     console.log('Profile form data :: ', this.profileForm.value);
   }
 }

}
