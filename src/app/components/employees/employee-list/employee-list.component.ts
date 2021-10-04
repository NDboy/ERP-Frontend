import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { PageEvent } from '@angular/material/paginator';
import { Employee } from 'src/app/model/employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() phraseString: string='';

  @Input() employees: Employee[] = [];
  // length: number = this.employees.length;
  // pageSize: number = 7;
  // pageSizeOptions: number[] = [10,20,50,100];
  // pageEvent: PageEvent = new PageEvent();

  currentEmployee: Employee = new Employee();
  items: Array<any> = [];
  pageOfItems: Array<any> = [];


  

  @Output() selectClick: EventEmitter<Employee> = new EventEmitter();
  @Output() updateClick: EventEmitter<Employee> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Employee> = new EventEmitter();

  columnKey: string='';
  
  constructor() { }

  ngOnInit(): void { }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  onDeleteEmployeeInDetailElement(): void {
    this.deleteClick.emit(this.currentEmployee);
    this.currentEmployee = new Employee();
  }
  
  onColumnSelect(key: string): void {
    this.columnKey = key;
  }
  
  onSelectButtonClick(employee: Employee): void {
    this.currentEmployee = employee;
  }

  onUpdateButtonClick(employee: Employee): void {
    this.updateClick.emit(employee);
  }

  onDeleteButtonClick(employee: Employee): void {
    this.deleteClick.emit(employee);
  }

}
