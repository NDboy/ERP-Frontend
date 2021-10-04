import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Apinvoice } from 'src/app/model/apinvoice';
import { Partner } from 'src/app/model/partner';
import { ApinvoicesService } from 'src/app/service/apinvoices.service';



@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {

  @Input() phraseString: string='';

  @Input() partners: Partner[] = [];

  currentPartner: Partner = new Partner();
  isVisibleDetails: boolean = false;
  selectedPartner: Partner = new Partner();
  apinvoices: Apinvoice[] = [];
  iconClose = faWindowClose;

  items: Array<any> = [];
  pageOfItems: Array<any> = [];


  @Output() selectClick: EventEmitter<Partner> = new EventEmitter();
  @Output() updateClick: EventEmitter<Partner> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Partner> = new EventEmitter();

  columnKey: string='';

  constructor(private apinvoicesService: ApinvoicesService) { }

  ngOnInit(): void {
  }

  
  onColumnSelect(key: string): void {
    this.columnKey = key;
  }
  
  onSelectButtonClick(partner: Partner): void {
    this.currentPartner = partner;
    this.selectedPartner = partner;
    this.isVisibleDetails = true;
    this.apinvoicesService.findApinvoiceByPartnerId(partner.id)
    .subscribe(response => {
      this.apinvoices = response;
    });      
  }

  onUpdateButtonClick(partner: Partner): void {
    this.updateClick.emit(partner);
  }

  onDeleteButtonClick(partner: Partner): void {
    this.deleteClick.emit(partner);
  }

  closeDetailsWindow(): void {
    this.isVisibleDetails = false;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
