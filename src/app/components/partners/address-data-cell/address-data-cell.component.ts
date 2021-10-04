import { Component, Input, OnInit } from '@angular/core';
import { Partner } from 'src/app/model/partner';

@Component({
  selector: 'app-address-data-cell',
  templateUrl: './address-data-cell.component.html',
  styleUrls: ['./address-data-cell.component.css']
})
export class AddressDataCellComponent implements OnInit {

  @Input() data: Partner = new Partner();
  @Input() key: string = '';
  address: string = 'address';

  constructor() { }

  ngOnInit(): void {
  }

}
