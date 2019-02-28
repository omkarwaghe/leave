import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password:string;
    constructor(private r : Router) { 
       this.username = localStorage.getItem("empId");
    }
    login() {
      if(this.username == localStorage.getItem("empId")) {
         alert("success");
         this.r.navigate(["/dashboard"]);
      } else {
        alert("Invalid credentials..");
       }
    }

  ngOnInit() {
  }

}
