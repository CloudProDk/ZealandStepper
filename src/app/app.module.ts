import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StepperComponent } from "./components/stepper/stepper.component";

import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { ReactiveFormsModule } from "@angular/forms";
import { PersonalinformationComponent } from "./components/stepper/steps/personalinformation/personalinformation.component";
import { AccessbasisComponent } from "./components/stepper/steps/accessbasis/accessbasis.component";
import { EducationalchoiceComponent } from './components/stepper/steps/educationalchoice/educationalchoice.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    PersonalinformationComponent,
    AccessbasisComponent,
    EducationalchoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
