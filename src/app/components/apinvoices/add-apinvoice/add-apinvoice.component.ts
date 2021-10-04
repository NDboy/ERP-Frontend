import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCaretDown, faCheckCircle, faExclamationCircle, faMinusCircle, faMinusSquare, faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Address } from 'src/app/model/address';
import { Apinvoice } from 'src/app/model/apinvoice';
import { InvoiceRow } from 'src/app/model/invoice-row';
import { InvoiceValues } from 'src/app/model/invoice-values';
import { Invoiceitem } from 'src/app/model/invoiceitem';
import { Partner } from 'src/app/model/partner';
import { VatItem } from 'src/app/model/vat-item';
import { ApinvoicesService } from 'src/app/service/apinvoices.service';
import { PartnersService } from 'src/app/service/partners.service';
import { ApinvoiceListComponent } from '../apinvoice-list/apinvoice-list.component';


@Component({
  selector: 'app-add-apinvoice',
  templateUrl: './add-apinvoice.component.html',
  styleUrls: ['./add-apinvoice.component.css']
})
export class AddApinvoiceComponent implements OnInit {

  @Input() newApinvoice: Apinvoice = new Apinvoice();
  @Input() btnClass: string = 'btn-info';
  @Input() text: string = '';

  @Input() dropDownIcon = faCaretDown;
  @Input() searchIcon = faSearch;
  @Input() foundIcon = faCheckCircle;
  @Input() notFoundIcon = faExclamationCircle;
  @Input() addIcon = faPlusSquare;
  @Input() minusIcon = faMinusSquare;

  @Output() createClick: EventEmitter<any> = new EventEmitter();

  newPartner: Partner = new Partner();
  statusArray: string[] = [];
  payModArray: string[] = [];
  currencyArray: string[] = [];
  isNewPartnerVisible: number = -1;
  isPartnerFound: boolean = false;
  partnerId: string = '';
  iban: string = '';
  netValue: number = 0;
  grossValue: number = 0;

  initItemName: string = '';
  initAmount: number = 0;
  initUnitPrice: number = 0;
  initVatRate: number = 0;
  initVatAmount: number = 0;
  initGrossPrice: number = 0;
  initRows: number = 0;
  invoiceRows: InvoiceRow[] = [];
  invoiceItems: Invoiceitem[] = [];
  vatItems: VatItem[] = [];
  vatTotal: number = 0;


  constructor(private partnersService: PartnersService, private apinvoicesService: ApinvoicesService) {
    this.statusArray = ["OPEN", "PAYED", "CANCELED"];
    this.payModArray = ["BANK_TRANSFER","CASH"];
    this.currencyArray = ["HUF","EUR","USD","GBP"];
  }

  ngOnInit(): void {
  }

  onCreateButtonClick(): void {
    this.addInvoiceRowsToInvoiceItems();
    this.newApinvoice.paymentModeAndDates.iban = this.iban;
    this.newApinvoice.paymentModeAndDates.invoiceValues = new InvoiceValues(this.netValue, this.vatTotal, this.grossValue, this.vatItems);
    this.apinvoicesService.createApinvoice(this.newApinvoice)
      .subscribe(resp => {
      this.ngOnInit();
      this.createClick.emit();
      });
  }

  onOpenAddPartnerModule(): void {
    this.isNewPartnerVisible *= -1;
  }

  onCreatePartnerButtonClick(): void {
    this.partnersService.createPartner(this.newPartner)
    .subscribe(dto => {
      let createdPartner  = new Partner();
      createdPartner.id = dto.id || '';
      createdPartner.name = dto.name || '';
      createdPartner.address = dto.address || new Address();
      createdPartner.taxNo = dto.taxNo || '';
      createdPartner.ibans = dto.ibans.join(",") || '';
      if(dto.apinvoices){
        createdPartner.apinvoices = dto.apinvoices.join(",") || '';
      }
      this.newPartner = createdPartner;
      this.partnerId = dto.id;
      if(dto.ibans.length > 0) {
        this.iban = dto.ibans[dto.ibans.length - 1]
      }
      this.isPartnerFound = true;
    });
  }

  onSearchPartnerButtonClick(): void {
    this.partnersService.findPartnerById(this.partnerId)
    .subscribe(dto => {
      let foundPartner  = new Partner();
      foundPartner.id = dto.id || '';
      foundPartner.name = dto.name || '';
      foundPartner.address = dto.address || new Address();
      foundPartner.taxNo = dto.taxNo || '';
      foundPartner.ibans = dto.ibans.join(",") || '';
      if(dto.apinvoices){
        foundPartner.apinvoices = dto.apinvoices.join(",") || '';
      }
      if(dto.ibans.length > 0) {
        this.iban = dto.ibans[dto.ibans.length - 1]
      }
      this.isPartnerFound = true;
      this.newPartner = foundPartner;
      this.isNewPartnerVisible *= -1;
    },
    error => {
      this.newApinvoice.partnerId = ''; 
      this.iban = '';
      this.isPartnerFound = false;
    },
    () => {}
    );
  }

  onAddPartnerModule(): void {
      this.newApinvoice.partnerId = this.newPartner.id || '';
      this.isNewPartnerVisible *= -1;

  }

  onAddInvoiceItemIconClick(): void {
    if(this.initItemName && this.initUnitPrice && this.initVatRate && this.initAmount) {
      let invRow = new InvoiceRow(this.initItemName, this.initUnitPrice, this.initVatRate, this.initAmount);
      this.invoiceRows.push(invRow);
      this.netValue += invRow.netPrice * invRow.amount;
      this.grossValue += Math.round(invRow.grossPrice * invRow.amount * 100) / 100;
      this.vatTotal +=  Math.round((invRow.netPrice * invRow.amount * invRow.vatRate / 100) * 100) / 100;
      this.calculateVatAmounts();
    }
  }

  addInvoiceRowsToInvoiceItems(): void {
    for (let i = 0; i < this.invoiceRows.length; i++) {
      for (let j = 0; j < this.invoiceRows[i].amount; j++) {
        let item = new Invoiceitem( this.invoiceRows[i].itemName, 
                                    this.invoiceRows[i].netPrice, 
                                    this.invoiceRows[i].vatRate);
        this.newApinvoice.invoiceItems.push(item);        
      }      
    }
  }

  onDeleteInvoiceItemIconClick(i: number): void {
    this.grossValue -= this.invoiceRows[i].grossPrice * this.invoiceRows[i].amount;
    this.netValue -= this.invoiceRows[i].netPrice * this.invoiceRows[i].amount;
    this.vatTotal -= this.invoiceRows[i].netPrice * this.invoiceRows[i].amount * this.invoiceRows[i].vatRate / 100;
    this.invoiceRows.splice(i,1);
    this.calculateVatAmounts();
    this.ngOnInit();
  }

  calculateVatAmounts(): void {
    this.vatItems = [];
    for (let i = 0; i < this.invoiceRows.length; i++) {

      let vat = this.invoiceRows[i].amount
             * this.invoiceRows[i].netPrice
             * this.invoiceRows[i].vatRate / 100;
             
      if(this.vatItems.length == 0) {
        this.vatItems.push(new VatItem(this.invoiceRows[i].vatRate, vat));
      } else {
        let counter = 0;
        for (let j = 0; j < this.vatItems.length; j++) {

          if(this.vatItems[j].vatRate == this.invoiceRows[i].vatRate) {
            this.vatItems[j].vatAmount = this.vatItems[j].vatAmount + vat;
            counter++;
            break; 
          }             
        }
        if(!counter) {

          this.vatItems.push(new VatItem(this.invoiceRows[i].vatRate, vat));
        }
      }             
    }
  }
 
  
}
