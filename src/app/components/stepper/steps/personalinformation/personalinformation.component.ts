import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.scss']
})
export class PersonalinformationComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {

      this.form = fb.group({
          cpr: ['', Validators.required ],
      });
  }
  ngOnInit() {}



}
