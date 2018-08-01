import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AppCommonModule } from './common/common.module';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full'},
  { path: 'courses', loadChildren: 'src/app/courses/courses.module#CoursesModule' },
  { path: 'students', loadChildren: 'src/app/students/students.module#StudentsModule' },
  { path: 'teachers', loadChildren: 'src/app/teachers/teachers.module#TeachersModule' },
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppCommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
