import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Students, Student } from './models/Student';
import { Observable } from 'rxjs';

const studentsApi = `${environment.apiUrl}/students`

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Students>{
    return this.http.get<Students>(studentsApi);
  }

  get(id: number): Observable<Student>{
    return this.http.get<Student>(`${studentsApi}/${id}`);
  }

  set(student: Student):Observable<Student>{
    return student.id ? this.update(student) : this.create(student);
  }

  update(student):Observable<Student>{
    return this.http.put<Student>(`${studentsApi}/${student.id}`, student);
  }

  create(student):Observable<Student>{
    return this.http.post<Student>(`${studentsApi}`, student);
  }
}
