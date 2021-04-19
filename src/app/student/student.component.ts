import { Student } from './student.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {

    console.log(`Student: ${this.student.name}`)
  }

}
