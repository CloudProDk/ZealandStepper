import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-accessbasis",
  templateUrl: "./accessbasis.component.html",
  styleUrls: ["./accessbasis.component.scss"]
})
export class AccessbasisComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      basis: ["", Validators.required],
      type: ["", Validators.required],
      year: ["", Validators.required]
    });
  }

  accessBasisTypes: string[] = [
    "Dansk gymnasial eksamen",
    "Dansk handelsskole eksamen",
    "Dansk teknisk eksamen"
  ];
  accessBasises: string[] = ["STX", "HHX", "HTX"];
  years: string[] = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020"
  ];

  ngOnInit() {}
}
