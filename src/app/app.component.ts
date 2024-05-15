import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public layoutMode: boolean;


  constructor() {
    this.layoutMode = true;
    this.onChangeMode();
  }

  onChangeMode() {
    let mode = this.layoutMode ? 'dark' : 'light';
    const body = document.body as HTMLElement;
    body.setAttribute('data-bs-theme', mode);
  }
}
