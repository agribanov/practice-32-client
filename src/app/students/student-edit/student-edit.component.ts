import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { Student } from '../models/Student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  item$: Observable<Student>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.updateStudent();
  }

  updateStudent(){
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = Number(params.get('id'));

        return this.studentsService.get(id);
      }),
      startWith(new Student)
    )
  }

  onFormSave(student){
    this.studentsService.set(student).subscribe(() => this.goToList());
  }

  onFormCancel(){
    this.goToList();
  }

  goToList(){
    this.router.navigate(["../"], {relativeTo: this.route})
  }


}
