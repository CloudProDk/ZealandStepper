import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-Educationalchoice",
  templateUrl: "./Educationalchoice.component.html",
  styleUrls: ["./Educationalchoice.component.scss"]
})
export class EducationalchoiceComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      primary: ["", Validators.required]
    });
  }

  taskTypeAreas: {
    name: string;
  }[] = [
    {
      name: "PBA Web Development"
    },
    {
      name: "PBA Software Development"
    },
    {
      name: "Computer Science"
    }
  ];
  selectedOptions: string[] = ["Computer Science"];

  ngOnInit() {}

  onNgModelChange(event) {
    console.log("on ng model change", event);
  }
}
