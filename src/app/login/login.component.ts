import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:FormGroup
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submitForm():void {
    if(this.checkForm()){
      console.log('Is Valid');
    }else{
      console.log('Is Not Valid');
    }
  }
  checkForm():boolean{
    console.log(this.findNumber());
    this.form.controls.name.markAsTouched();
    this.form.controls.password.markAsTouched();
    let isValid: boolean = false;
    if(this.form.valid){
      return isValid = true;
    } 
     return isValid;
  }

  findNumber(): any[]{
    const books:string[] =  ['how', 'to' , 'use',  'this' , 'word', 'how', 'to' , 'use',  'this' , 'word', 'word', 'to'];
    let result = {};
    let resultArray = [];
    let count: number = 0;
    for(let i=0; i< books.length; i++){    
      for(let j=i+1; j< books.length; j++) {
        if(books[i] === books[j]){
          count++;
        }
      }
      if(count > 0){
        if(result[books[i]]){
          result[books[i]] = parseInt(result[books[i]]) + count;
        }else{
          result[books[i]] = count;
        }
        count = 0;
      }
    }
    for( let item in result){
      resultArray.push({
        name : item,
        count: result[item]
      })
    };
    let min = 1;
    let max = -1;
    resultArray.sort((a, b) => {
      if (a['count'] < b['count']) {
        return min;
      }
      if (a['count'] > b['count']) {
        return max;
      }
      return 0;
    });
    return resultArray;
  }

}

