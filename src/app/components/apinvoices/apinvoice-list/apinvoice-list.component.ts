import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Apinvoice } from 'src/app/model/apinvoice';
import { InvoiceRow } from 'src/app/model/invoice-row';
import { PartnerDto } from 'src/app/model/partner-dto';
import { VatItem } from 'src/app/model/vat-item';
import { ApinvoicesService } from 'src/app/service/apinvoices.service';
import { PartnersService } from 'src/app/service/partners.service';

@Component({
  selector: 'app-apinvoice-list',
  templateUrl: './apinvoice-list.component.html',
  styleUrls: ['./apinvoice-list.component.css']
})
export class ApinvoiceListComponent implements OnInit {

  @Input() phraseString: string='';

  @Input() apinvoices: Apinvoice[] = [];
  @Input() deleteIcon = faTrash;

  currentApinvoice: Apinvoice = new Apinvoice();
  isVisibleDetails: number = -1;
  currentPartner: PartnerDto = new PartnerDto();
  invoiceRows: InvoiceRow[] = [];
  vatItems: VatItem[] = [];
  
  items: Array<any> = [];
  pageOfItems: Array<any> = [];

  @Output() selectClick: EventEmitter<Apinvoice> = new EventEmitter();
  @Output() updateClick: EventEmitter<Apinvoice> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Apinvoice> = new EventEmitter();

  columnKey: string='';

  constructor(private partnersService: PartnersService, private apinvoicesService: ApinvoicesService) { }

  ngOnInit(): void { }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  onDeleteApinvoiceInDetailElement(): void {
    this.deleteClick.emit(this.currentApinvoice);
    this.currentApinvoice = new Apinvoice();
  }
  
  onColumnSelect(key: string): void {
    this.columnKey = key;
  }
  
  onSelectButtonClick(apinvoice: Apinvoice): void {
    this.currentApinvoice = apinvoice;
  }

  onUpdateButtonClick(apinvoice: Apinvoice): void {
    this.updateClick.emit(apinvoice);
  }

  onDeleteButtonClick(apinvoice: Apinvoice): void {
    this.deleteClick.emit(apinvoice);
  }

  showInvoiceDetails(apinvoice: Apinvoice): void {
    this.isVisibleDetails *= -1;
    this.currentApinvoice = apinvoice;
    this.convertInvoiceItemsToRows();
    this.vatItems = this.currentApinvoice.paymentModeAndDates.invoiceValues.vatAmounts;
  }

  convertInvoiceItemsToRows(): void {
    this.invoiceRows = [];
    for (let i = 0; i < this.currentApinvoice.invoiceItems.length; i++) {
      let name = this.currentApinvoice.invoiceItems[i].itemName;
      let netPrice = this.currentApinvoice.invoiceItems[i].netPrice;
      let vatRate = this.currentApinvoice.invoiceItems[i].vatRate;
      let newInvoiceRow = new InvoiceRow(name, netPrice, vatRate, 1)
      if(this.invoiceRows.length == 0) {
        this.invoiceRows.push(newInvoiceRow);
      } else {
        let found = false;
        for (let j = 0; j < this.invoiceRows.length; j++) {
          if(name == this.invoiceRows[j].itemName && netPrice == this.invoiceRows[j].netPrice && vatRate == this.invoiceRows[j].vatRate) {
            this.invoiceRows[j].amount++;
            found = true;
            break;
          }          
        }
        if(!found) {
          this.invoiceRows.push(newInvoiceRow);
        }
      }      
    }
  }



}
