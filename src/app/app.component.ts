import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators, FormArray,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  reactiveForm:FormGroup;
//education: any;
  //user: User

  constructor() {
    this.reactiveForm=new FormGroup({
      firstName : new FormControl(null,[Validators.required , this.noSpace]),
      lastName : new FormControl(null,Validators.required),
      email : new FormControl(null,[Validators.required,Validators.email]),
      country : new FormControl(null,Validators.required),
      gender: new FormControl(null,Validators.required), 
      education: new FormArray([
        new FormControl(''),
      ])
        
    });
  }
  onSubmitButtonClick(){
    console.log(this.reactiveForm)
  }

  noSpace(control:FormControl){
    if(control.value!= null && control.value.indexOf(' ')!=-1){
      return{ noSpace: true}
    }
    return null;
  }

  reset(){
    this.reactiveForm.reset();
  }

  get education() {
    return this.reactiveForm.get('education')as FormArray;
  }
 
  add() {
    this.education.push(new FormControl(''));
 }

}
