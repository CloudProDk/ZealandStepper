import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accessbasis",
  templateUrl: "./accessbasis.component.html",
  styleUrls: ["./accessbasis.component.scss"]
})
export class AccessbasisComponent implements OnInit {
  accessBasisTypes: string[] = [
    "Dansk gymnasial eksamen",
    "Dansk handelsskole eksamen"
  ];
  accessBasises: string[] = ["STX", "HHX"];
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
  constructor() {}

  ngOnInit() {}
}
