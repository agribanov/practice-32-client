import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsListComponent } from './students-list/students-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  {path: '', component: StudentsListComponent},
  {path: 'add', component: StudentAddComponent},
  {path: ':id', component: StudentEditComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
