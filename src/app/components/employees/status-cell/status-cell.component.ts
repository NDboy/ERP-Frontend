import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-status-cell',
  templateUrl: './status-cell.component.html',
  styleUrls: ['./status-cell.component.css']
})
export class StatusCellComponent implements OnInit {

  @Input() data: Employee = new Employee();
  @Input() key: string = '';

  currentEmployee: Employee = new Employee();

  statusArray : string[] = [];
  selectedStatus : string = '';
  originalStatus : string = '';

  constructor() { 
    this.statusArray = ["ACTIVE", "PASSIVE", "QUIT"]
    this.originalStatus = this.currentEmployee.status;
  }

  ngOnInit(): void {
  }

}
