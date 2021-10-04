import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Partner } from 'src/app/model/partner';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.css']
})
export class AddPartnerComponent implements OnInit {

  @Input() newPartner: Partner = new Partner();
  @Input() btnClass: string = 'btn-info';
  @Input() text: string = '';

  
  @Output() createClick: EventEmitter<Partner> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onCreateButtonClick(): void {
    this.createClick.emit(this.newPartner);
  }

}
