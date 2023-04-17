import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm! : FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      userName:['',Validators.required],
      idNumber:['',Validators.required],
      email:['',Validators.required],
      contactNumber:['',Validators.required],
      password:['',Validators.required]
      // confirmpassword:['',Validators.required]
    })  
  }
  

  fetchDataFromServer(){
    this.http.post<any>("https://schoolpayments.herokuapp.com/parent/signup",this.registerForm.value)
    .subscribe(res=>{
      alert("Registration Successful");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong!!!");
    })
  console.log(this.registerForm.value)
  
  }

}
