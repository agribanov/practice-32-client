import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../models/Student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  list$: Observable<Students>
  displayedColumns = ['id', 'name', 'surname', 'phone', 'email', 'is_active', 'actions']

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.updateList();
  }

  updateList(){
    return this.list$ = this.studentsService.getList();
  }

}
