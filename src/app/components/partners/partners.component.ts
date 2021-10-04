import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { Partner } from 'src/app/model/partner';
import { PartnerDto } from 'src/app/model/partner-dto';
import { PartnersService } from 'src/app/service/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  partners: Partner[] = [];

  partnerDtos: PartnerDto[] = [];

  newPartner: Partner = new Partner();

  currentPartner: Partner = new Partner();

  phrase: string = '';

  constructor(private partnersService: PartnersService) {

  }

/*
ngOnInit(): void {
  this.partnersService.listAllPartners() 
  .subscribe(response => {
    this.partners = response);
  });
}
*/

  ngOnInit(): void {
    this.partnersService.listAllPartners() 
    .subscribe(response => {
      this.partners = response.map(
        dto => {
          let newPartner  = new Partner();
          newPartner.id = dto.id || '';
          newPartner.name = dto.name || '';
          newPartner.address = dto.address || new Address();
          newPartner.taxNo = dto.taxNo || '';
          newPartner.ibans = dto.ibans.join(",") || '';
          if(dto.apinvoices){
            newPartner.apinvoices = dto.apinvoices.join(",") || '';
          }
          return newPartner;
        }
      )      
    });   
  }


  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  selectButtonClick(partner: Partner): void {
    this.currentPartner = partner;
  }

  onUpdateButtonClick(partner: Partner): void {
    this.partnersService.updatePartner(partner)
    .subscribe(response => {
      this.ngOnInit();
    });
  }

  onDeleteButtonClick(partner: Partner): void {
    this.partnersService.removePartnerById(partner)
    .subscribe(response => {
      this.partners = this.partners.filter(item => item.id !== partner.id);
    });
  }

  onCreateButtonClick(): void {
    this.partnersService.createPartner(this.newPartner)
    .subscribe(resp => {
      this.ngOnInit();
    });

  }

}
