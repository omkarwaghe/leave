import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
name: string;
emps : Observable<Employee[]>;
constructor(private employeeService: EmployeeService, private _router : Router) { 
  this.emps = employeeService.getEmps();
}
  ngOnInit() {
  }

}
