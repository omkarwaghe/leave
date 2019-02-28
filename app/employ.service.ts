import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from "./employee";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployService {

  constructor(private http: Http) { }
  searchEmployee(empno:number): Observable<Employee[]> {
    return this.http.get
    ("http://localhost:8080/FTP115new/api/employees" +empno)
    .map((res: Response)=> res.json());
  }
}
