import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../model/address';
import { Employee } from '../model/employee';
import { EmployeeDto } from '../model/employee-dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  jsonUrl: string = environment.hostUrl + "/api/employees";  


  constructor(private http: HttpClient) { }

  listAllEmployees(): Observable<EmployeeDto[]> {
    const headers = environment.authenticatedHeaders;
    return this.http.get<EmployeeDto[]>(this.jsonUrl, {headers});
  }

  findEmployeeById(id: string): Observable<EmployeeDto> {
    const headers = environment.authenticatedHeaders;
    return this.http.get<EmployeeDto>(`${this.jsonUrl}/${id}`, {headers});
  }

  createEmployee(employee: Employee): Observable<any> {
    const headers = environment.authenticatedHeaders;
    let newEmployeeDto = new EmployeeDto();
    newEmployeeDto.id = employee.id || '';
    newEmployeeDto.firstName = employee.firstName || '';
    newEmployeeDto.lastName = employee.lastName || '';
    newEmployeeDto.status = employee.status || '';
    newEmployeeDto.address = employee.address || new Address();
    newEmployeeDto.entryDate = employee.entryDate || new Date();
    if(employee.apInvoices) {
      newEmployeeDto.apInvoices = employee.apInvoices.trim().split(",") || [];
    }
    if(employee.accountings) {
      newEmployeeDto.accountings = employee.accountings.trim().split(",") || [];
    }
    return this.http.post<Observable<any>>(this.jsonUrl, newEmployeeDto, {headers});
  }

  updateEmployee(employee: Employee): Observable<any> {
    const headers = environment.authenticatedHeaders;
    let newEmployeeDto = new EmployeeDto();
    newEmployeeDto.id = employee.id || '';
    newEmployeeDto.firstName = employee.firstName || '';
    newEmployeeDto.lastName = employee.lastName || '';
    newEmployeeDto.status = employee.status || '';
    newEmployeeDto.address = employee.address || new Address();
    newEmployeeDto.entryDate = employee.entryDate || new Date();
    if(employee.apInvoices) {
      newEmployeeDto.apInvoices = employee.apInvoices.trim().split(",") || [];
    }
    if(employee.accountings) {
      newEmployeeDto.accountings = employee.accountings.trim().split(",") || [];
    }
    return this.http.put(`${this.jsonUrl}/${employee.id}`, newEmployeeDto, {headers});
  }

  removeEmployeeById(employee: Employee): Observable<any> {
    const headers = environment.authenticatedHeaders;
    return this.http.delete(`${this.jsonUrl}/${employee.id}`, {headers});
  }

}
