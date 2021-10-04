import { Component, Input, OnInit } from '@angular/core';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Apinvoice } from 'src/app/model/apinvoice';
import { ApinvoicesService } from 'src/app/service/apinvoices.service';

@Component({
  selector: 'app-apinvoices',
  templateUrl: './apinvoices.component.html',
  styleUrls: ['./apinvoices.component.css']
})
export class ApinvoicesComponent implements OnInit {

  apinvoices: Apinvoice[] = [];
  isVisibleNewInvoiceModule: number = -1;
  @Input() searchIcon = faSearch;
  @Input() caretDownIcon = faCaretDown;

  // employeeDtos: EmployeeDto[] = [];

  newApinvoice: Apinvoice = new Apinvoice();
  
  currentApinvoice: Apinvoice = new Apinvoice();

  phrase: string = '';

  constructor(private apinvoicesService: ApinvoicesService) { }

  ngOnInit(): void {
    this.apinvoicesService.listAllApinvoices()
    .subscribe(response => {
      this.apinvoices = response;
    });   
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  openNewInvoiceModule(): void {
    this.isVisibleNewInvoiceModule *= -1;
  }

  selectButtonClick(apinvoice: Apinvoice): void {
    this.currentApinvoice = apinvoice;
  }

  onUpdateButtonClick(apinvoice: Apinvoice): void {
    this.apinvoicesService.updateApinvoice(apinvoice)
    .subscribe(response => {
      this.ngOnInit();
    });
  }

  onDeleteButtonClick(apinvoice: Apinvoice): void {
    this.apinvoicesService.removeApinvoiceById(apinvoice)
    .subscribe(response => {
      this.apinvoices = this.apinvoices.filter(item => item.id !== apinvoice.id);
    });
  }

  onListRefreshOnCreate(): void {
    this.ngOnInit();
  }


}
