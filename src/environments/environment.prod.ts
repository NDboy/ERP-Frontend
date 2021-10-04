import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  hostUrl: 'http://46.101.246.108:8080',
  authenticatedHeaders: new HttpHeaders()
};
