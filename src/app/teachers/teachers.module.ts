import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeachersFormComponent } from './teachers-form/teachers-form.component';
import { TeachersNavigationComponent } from './teachers-navigation/teachers-navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeachersListComponent, TeacherAddComponent, TeacherEditComponent, TeachersFormComponent, TeachersNavigationComponent]
})
export class TeachersModule { }
