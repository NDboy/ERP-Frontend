import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-address-data-cell',
  templateUrl: './address-data-cell.component.html',
  styleUrls: ['./address-data-cell.component.css']
})
export class AddressDataCellComponent implements OnInit {

  @Input() data: Employee = new Employee();
  @Input() key: string = '';
  address: string = 'address';

  constructor() { }

  ngOnInit(): void {
  }

}
