import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from "./employee";
import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: Http) { }
    getEmps(): Observable<Employee[]> {
      return this.http.get
      ("http://localhost:8080/FTP115/api/employees")
      .map((res: Response)=> res.json());
    }
    searchEmployee(empno:number): Observable<Employee> {
      return this.http.get
      ("http://localhost:8080/FTP115/api/employees/" +empno)
      .map((res: Response)=> res.json());
    }
  }