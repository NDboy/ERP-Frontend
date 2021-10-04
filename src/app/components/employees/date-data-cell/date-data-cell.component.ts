import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-date-data-cell',
  templateUrl: './date-data-cell.component.html',
  styleUrls: ['./date-data-cell.component.css']
})
export class DateDataCellComponent implements OnInit {

  @Input() data: Employee = new Employee();
  @Input() key: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
