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
  ngOnInit() {}

}
export class ListSelectionExample {
  typesOfshoe: string[] = ['PBA Web Development', 'PBA Software Developmnent', 'Computer Science', 'Markering Management', 'Commerce Management'];
}