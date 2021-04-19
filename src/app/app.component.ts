import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  luke = {
    name: 'Luke',
    isJedi: true,
    template: 'Coruscant'
  }

  leia = {
    name: 'leia',
    isJedi: false
  }

  han = {
    name: 'han',
    isJedi: false
  }
}
