import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {employeeData} from './employeeData.service'
import { Employee } from './employeedata';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiurl = 'api/employeeDatas';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  perfop = {
    headers: this.headers
  };
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }                     //Injecting HTTP service to communicate with the data

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }

  getUsers(): Observable<employeeData[]> {
    return this.http.get<employeeData[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addUser (employee: Employee): Observable<Employee> { 
    employee.id=null;
    return this.http.post<Employee>(this.apiurl, employee, this.httpOptions).pipe(
    tap(data => console.log(data)),
    catchError(this.handleError)
  );
}
}