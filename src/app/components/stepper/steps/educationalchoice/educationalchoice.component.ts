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

  }

  taskTypeAreas: {
    name: string;
  }[] = [
    {
      name: 'PBA Web Development'
    },
    {
      name: 'PBA Software Development'
    },
    {
      name: 'Computer Science'
    },
  ];
  selectedOptions: string[] = ['Computer Science'];

  ngOnInit() {}

  onNgModelChange(event){
    console.log('on ng model change', event);
  }

}
