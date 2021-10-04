import { Address } from "./address";

export class PartnerDto {

    [key: string]: any;
    id?: string = '';
    name: string = '';
    address: Address = new Address();
    taxNo: string = '';
    ibans: string[] = [];
    apinvoices: string[] = [];
  
    constructor(properties?: PartnerDto) {
      if (properties) {
        this.id = properties.id || '';
        this.name = properties.name || '';
        this.address = properties.address || new Address();
        this.taxNo = properties.taxNo || '';
        this.ibans = properties.ibans || [];
        this.apinvoices = properties.apinvoices || [];
      }
    }

}
