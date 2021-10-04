import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Apinvoice } from '../model/apinvoice';

@Injectable({
  providedIn: 'root'
})
export class ApinvoicesService {

  jsonUrl: string = environment.hostUrl + "/api/apinvoices";  

  constructor(private http: HttpClient) { }

  listAllApinvoices(): Observable<Apinvoice[]> {
    const headers = environment.authenticatedHeaders;
    return this.http.get<Apinvoice[]>(this.jsonUrl, {headers});
  }

  findApinvoiceById(id: string): Observable<Apinvoice> {
    const headers = environment.authenticatedHeaders;
    return this.http.get<Apinvoice>(`${this.jsonUrl}/${id}`, {headers});
  }

  findApinvoiceByPartnerId(partnerId?: string): Observable<Apinvoice[]> {
    const headers = environment.authenticatedHeaders;
    return this.http.get<Apinvoice[]>(`${this.jsonUrl}?partnerId=${partnerId}`, {headers});
  }

  createApinvoice(apinvoice: Apinvoice): Observable<any> {
    const headers = environment.authenticatedHeaders;
    return this.http.post<Observable<any>>(this.jsonUrl, apinvoice, {headers});
  }

  updateApinvoice(apinvoice: Apinvoice): Observable<any> {
    const headers = environment.authenticatedHeaders;
    return this.http.put(`${this.jsonUrl}/${apinvoice.id}`, apinvoice, {headers});
  }

  removeApinvoiceById(apinvoice: Apinvoice): Observable<any> {
    const headers = environment.authenticatedHeaders;
    return this.http.delete(`${this.jsonUrl}/${apinvoice.id}`, {headers});
  }

}
