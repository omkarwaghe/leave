import { Component, OnInit } from '@angular/core';
import {LeaveService } from '../leave.service';
import { Leave } from '../leave';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  empId:number;

  constructor(public applyleaveService:LeaveService, private router : Router) { 
      this.empId= parseInt(localStorage.getItem("empId"));
      alert("Employ ID" + this.empId );
  }
  model = new Leave();
  message :string;
  msg : String;
  isValidFormSubmitted = false;
  calcNoofDays(){
    let date1: string=this.model.leaStDate.toString();
    let date2: string=this.model.leaEndDate.toString();
    let diffInMs: number= Date.parse(date2)-Date.parse(date1);
    let diffInhrs: number=diffInMs/1000/60/60/24;
    this.model.leaNoOfDays=diffInhrs+1;
}

Applyleave(form:NgForm)
{
this.isValidFormSubmitted=false;
if(form.invalid){
  alert("invalid");
  return;
}
console.log('End date component' + this.model.leaEndDate);
this.applyleaveService.applyLeave(this.empId,this.model).subscribe(
  success => {this.msg=success;
    console.log(success);
  },
  err => {
    this.msg=err;
    console.log(err);
  }
)
this.isValidFormSubmitted = true;
setTimeout(()=> {
  this.router.navigate(['/dashboard'])
},10000);
}


  
  ngOnInit() {
  }

}
