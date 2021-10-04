import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.css']
})
export class DataCellComponent implements OnInit {

  @Input() data: Employee = new Employee();
  @Input() key: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
