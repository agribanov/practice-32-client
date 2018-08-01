import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Students } from './models/Student';
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
}
