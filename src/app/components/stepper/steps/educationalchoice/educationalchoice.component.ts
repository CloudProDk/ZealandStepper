import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Educationalchoice',
  templateUrl: './Educationalchoice.component.html',
  styleUrls: ['./Educationalchoice.component.scss']
})
export class EducationalchoiceComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {

      this.form = fb.group({
          cpr: ['', Validators.required ],
          city: ['', Validators.required ],
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          email: ['', Validators.required],
          zip: ['', Validators.required],
          street: ['', Validators.required],
          phone: ['', Validators.required],
      });
  }
  ngOnInit() {}



}