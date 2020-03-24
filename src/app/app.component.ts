import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ZealandStepper';
  isDarkThemeOn = false;

  toggleTheme() {
    this.isDarkThemeOn = !this.isDarkThemeOn;
    document.body.classList.toggle('dark-theme');
  }
}
