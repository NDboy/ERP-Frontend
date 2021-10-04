import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { Employee } from 'src/app/model/employee';
import { EmployeeDto } from 'src/app/model/employee-dto';
import { EmployeesService } from 'src/app/service/employees.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  employeeDtos: EmployeeDto[] = [];

  newEmployee: Employee = new Employee();
  
  currentEmployee: Employee = new Employee();

  phrase: string = '';

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.listAllEmployees() 
    .subscribe(response => {
      this.employees = response.map(
        dto => {
          let newEmployee  = new Employee();
          newEmployee.id = dto.id || '';
          newEmployee.firstName = dto.firstName || '';
          newEmployee.lastName = dto.lastName || '';
          newEmployee.status = dto.status || '';
          newEmployee.address = dto.address || new Address();
          newEmployee.entryDate = dto.entryDate || new Date();
          if(dto.apInvoices){
            newEmployee.apInvoices = dto.apInvoices.join(",") || '';
          }
          if(dto.accountings){
            newEmployee.accountings = dto.accountings.join(",") || '';
          }
          return newEmployee;
        }
      )      
    });   
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  selectButtonClick(employee: Employee): void {
    this.currentEmployee = employee;
  }

  onUpdateButtonClick(employee: Employee): void {
    this.employeesService.updateEmployee(employee)
    .subscribe(response => {
      this.ngOnInit();
    });
  }

  onDeleteButtonClick(employee: Employee): void {
    this.employeesService.removeEmployeeById(employee)
    .subscribe(response => {
      this.employees = this.employees.filter(item => item.id !== employee.id);
    });
  }

  onCreateButtonClick(): void {
    this.employeesService.createEmployee(this.newEmployee)
    .subscribe(response => {
      this.ngOnInit();
    });

  }

}


