import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsNavigationComponent } from './students-navigation/students-navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentsListComponent, StudentAddComponent, StudentEditComponent, StudentFormComponent, StudentsNavigationComponent]
})
export class StudentsModule { }
