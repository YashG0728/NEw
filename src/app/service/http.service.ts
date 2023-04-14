import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../component/model/employee';

@Injectable({
  providedIn: 'root'
})
export class Http {
  constructor( private http : HttpClient) { 

  }

  baseUrl="http://localhost:8080/employeepayrollservice";
  getData():Observable<any>{
   return this.http.get(this.baseUrl + "/findall");
  }

  addEmpData(body:any):Observable<any>{
return this.http.post(this.baseUrl + "/add", body);
  }

  deleteData(empId:any):Observable<any>{
    return this.http.delete(this.baseUrl + "/delete"+empId)
  }

  public updateEmployee(empId:number,employee: Employee): Observable<any> {
    return this.http.put(this.baseUrl+"/update/"+empId,employee);
  }
}
