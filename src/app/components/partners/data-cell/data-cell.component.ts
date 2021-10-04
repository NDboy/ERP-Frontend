import { Component, Input, OnInit } from '@angular/core';
import { Partner } from 'src/app/model/partner';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.css']
})
export class DataCellComponent implements OnInit {

  @Input() data: Partner = new Partner();
  @Input() key: string = '';

  constructor() { }
  ngOnInit(): void {
  }

}
