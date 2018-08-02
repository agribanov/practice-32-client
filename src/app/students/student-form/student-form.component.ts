import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../models/Student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  @Input() student: Student
  @Input('title') formTitle: string
  @Output() save = new EventEmitter<Student>()
  @Output() cancel = new EventEmitter<void>()

  onFormSubmit(){
    this.save.emit(this.student);
  }

  onFormCancel(){
    this.cancel.emit(null);
  }

}
