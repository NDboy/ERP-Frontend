import { Component, Input, OnInit } from '@angular/core';
import { Partner } from 'src/app/model/partner';

@Component({
  selector: 'app-collection-data-cell',
  templateUrl: './collection-data-cell.component.html',
  styleUrls: ['./collection-data-cell.component.css']
})
export class CollectionDataCellComponent implements OnInit {

  @Input() data: Partner = new Partner();
  @Input() key: string = '';
  partnerIbans: string = '';



  constructor() { }


  ngOnInit(): void {
    this.partnerIbans = this.data[this.key].join(',');
    this.data[this.key] = this.partnerIbans.trim().split(',');
  }

}
