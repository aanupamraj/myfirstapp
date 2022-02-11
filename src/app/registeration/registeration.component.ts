import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  signUpForm!:FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder 
  }

}
