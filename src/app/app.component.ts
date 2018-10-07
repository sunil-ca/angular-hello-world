import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <app-welcome></app-welcome>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hello-world';
}
