import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
uname:string;
  emps : Observable<Employee[]>;
  constructor(private employeeService: EmployeeService, private _router : Router) { 
    this.emps = employeeService.getEmps();
    localStorage.setItem("name",name);
  } login(empid,mgrid)
  {
    localStorage.setItem("empId",empid);
    localStorage.setItem("mgrid",mgrid);
    this. _router.navigate(["/login"]);
  }


  ngOnInit() {
  }

}
