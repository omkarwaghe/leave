import { Component, OnInit } from '@angular/core';
import {LeaveService } from '../leave.service';
import { Leave } from '../leave';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import {EmployeeService } from '../employee.service';

@Component({
  selector: 'app-approve-deny',
  templateUrl: './approve-deny.component.html',
  styleUrls: ['./approve-deny.component.css']
})
export class ApproveDenyComponent implements OnInit {
 leaveDetails : Observable<Leave> ;
empDetails : Observable<Employee>;
leaveId : number;
empid : number;
status : string;
obj : Leave;
message : String;
mgrid : number;


  constructor(private leaveService:LeaveService, private empservice:EmployeeService) { 

    this.leaveId = parseInt(localStorage.getItem("leavId"));
    this.empid = parseInt(localStorage.getItem("lempId"));
    this.mgrid = parseInt(localStorage.getItem("empId"));
    this.empDetails = this.empservice.searchEmployee(this.empid);
    alert(this.leaveId);
    // alert(e.empid);
    this.leaveDetails=leaveService.searchById(this.leaveId);
    this.obj= new Leave();
    }
    approve() {
      this.obj.leaId = this.leaveId;
      this.status="YES";
      this.leaveService.approveDeny(this.mgrid,this.status,this.obj).subscribe(
        dd => {this.message=dd;
        },
        errorMsg => {
          this.message=errorMsg;
          console.log(errorMsg)
        }
      )
    }
    deny() {
      this.obj.leaId = this.leaveId;
      this.status="NO";
      this.leaveService.approveDeny(this.mgrid,this.status,this.obj).subscribe(
        dd => {this.message=dd;
        },
        errorMsg => {
          this.message=errorMsg;
          console.log(errorMsg)
        }
      )
    }

  ngOnInit() {
  }

}
