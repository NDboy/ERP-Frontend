import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../model/address';
import { Partner } from '../model/partner';
import { PartnerDto } from '../model/partner-dto';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  jsonUrl: string = environment.hostUrl + "/api/partners";

  constructor(private http: HttpClient) { }
  

  listAllPartners(): Observable<PartnerDto[]> {
    const headers = environment.authenticatedHeaders;
    return this.http.get<PartnerDto[]>(this.jsonUrl, {headers});
  }

  findPartnerById(id: string): Observable<PartnerDto> {
    const headers = environment.authenticatedHeaders;
    return this.http.get<PartnerDto>(`${this.jsonUrl}/${id}`, {headers});
  }

  createPartner(partner: Partner): Observable<any> {
    const headers = environment.authenticatedHeaders;
    let newPartnerDto = new PartnerDto();
    newPartnerDto.id = partner.id || '';
    newPartnerDto.name = partner.name || '';
    newPartnerDto.address = partner.address || new Address();
    newPartnerDto.taxNo = partner.taxNo || '';
    newPartnerDto.ibans = partner.ibans.trim().split(",") || [];
    if(partner.apinvoices) {
      newPartnerDto.apinvoices = partner.apinvoices.trim().split(",") || [];
    }
    return this.http.post<Observable<any>>(this.jsonUrl, newPartnerDto, {headers});
  }

  updatePartner(partner: Partner): Observable<any> {
    const headers = environment.authenticatedHeaders;
    let newPartnerDto = new PartnerDto();
    newPartnerDto.id = partner.id || '';
    newPartnerDto.name = partner.name || '';
    newPartnerDto.address = partner.address || new Address();
    newPartnerDto.taxNo = partner.taxNo || '';
    newPartnerDto.ibans = partner.ibans.trim().split(",") || [];
    if(partner.apinvoices) {
      newPartnerDto.apinvoices = partner.apinvoices.trim().split(",") || [];
    }
    return this.http.put(`${this.jsonUrl}/${partner.id}`, newPartnerDto, {headers});
  }
  
  removePartnerById(partner: Partner): Observable<any> {
    const headers = environment.authenticatedHeaders;
    return this.http.delete(`${this.jsonUrl}/${partner.id}`, {headers});
  }

}
