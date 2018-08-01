import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesNavigationComponent } from './courses-navigation/courses-navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesListComponent, CourseAddComponent, CourseEditComponent, CourseFormComponent, CoursesNavigationComponent]
})
export class CoursesModule { }
