import { Address } from "./address";

export class Partner {
    [key: string]: any;
    id?: string = '';
    name: string = '';
    address: Address = new Address();
    taxNo: string = '';
    ibans: string = '';
    apinvoices: string = '';
  
    constructor(properties?: Partner) {
      if (properties) {
        this.id = properties.id || '';
        this.name = properties.name || '';
        this.address = properties.address || new Address();
        this.taxNo = properties.taxNo || '';
        this.ibans = properties.ibans || '';
        this.apinvoices = properties.apinvoices || '';
      }
    }

}


