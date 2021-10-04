import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() newEmployee: Employee = new Employee();
  @Input() btnClass: string = 'btn-info';
  @Input() text: string = '';
  statusArray : string[] = [];

  @Output() createClick: EventEmitter<Employee> = new EventEmitter();

  
  constructor() {
    this.statusArray = ["ACTIVE", "PASSIVE", "QUIT"]
  }

  ngOnInit(): void {
  }

  onCreateButtonClick(): void {
    this.createClick.emit(this.newEmployee);
  }

}
