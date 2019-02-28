import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Leave } from "../app/leave";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
    
      constructor(private http: Http) {
    
       }
    
      getLevPending(empid:number): Observable<Leave[]> {
        return this.http.get
        ("http://localhost:8080/FTP115/api/leavedetails/leavepending/" + empid)
        .map((res: Response)=> res.json());
      }
      leavehistory(empid:number): Observable<Leave[]> {
        return this.http.get
        ("http://localhost:8080/FTP115/api/leavedetails/leavehistory/" + empid)
        .map((res: Response)=> res.json());
      }

    searchById(leaveId : number) :Observable<Leave> {
      return this.http.get
      ("http://localhost:8080/FTP115/api/leavedetails/"+ leaveId)
      .map((res: Response)=> res.json());
    }
   
    approveDeny(empid : number,status:string,leavedetails:Leave):Observable<String> {
    return this.http.post
    ("http://localhost:8080/FTP115/api/leavedetails/approveDeny/" +empid +"/" +status,leavedetails)
    .map((res: Response)=> res.text());
   }

   applyLeave(empid : number, leavedetails:Leave):Observable<String> {
    return this.http.post
    ("http://localhost:8080/FTP115/api/leavedetails/applyleave/" +empid,leavedetails)
    .map((res: Response)=> res.text());
   }
}
