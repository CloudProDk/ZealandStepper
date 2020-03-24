import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './components/stepper/stepper.component';


import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalinformationComponent } from './components/stepper/steps/personalinformation/personalinformation.component';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material';

import { MatSelectModule } from "@angular/material/select";
import {MatRippleModule} from '@angular/material/core';

import { AccessbasisComponent } from './components/stepper/steps/accessbasis/accessbasis.component';
import { MatListModule } from '@angular/material/list';

import { EducationalchoiceComponent } from './components/stepper/steps/educationalchoice/educationalchoice.component';
import { DoneComponent } from './components/stepper/steps/done/done.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { UploadComponent } from './components/stepper/steps/upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    PersonalinformationComponent,
    AccessbasisComponent,
    EducationalchoiceComponent,
    DoneComponent,
    UploadComponent
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
    ReactiveFormsModule,
    MatRippleModule,
    MatListModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public isDarkThemeOn = true;
}
