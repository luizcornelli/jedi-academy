import { Student } from './student/student.model';
import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  students : Student[] = [

    {
      name: 'Luke',
      isJedi: true,
      template: 'Coruscant'
    },

    {
      name: 'leia',
      isJedi: false
    },

    {
      name: 'han',
      isJedi: false
    }
  ]
}
