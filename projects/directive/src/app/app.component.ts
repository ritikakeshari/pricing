import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isvisible: boolean = true;
  change() {
    this.isvisible=this.isvisible?false:true;
  }
}
