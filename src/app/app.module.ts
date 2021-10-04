import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountingsComponent } from './components/accountings/accountings.component';
import { ApinvoicesComponent } from './components/apinvoices/apinvoices.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PartnerListComponent } from './components/partners/partner-list/partner-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { PartnersService } from './service/partners.service';
import { DataCellComponent } from './components/partners/data-cell/data-cell.component';
import { ActionButtonGroupComponent } from './components/partners/action-button-group/action-button-group.component';
import { ActionButtonComponent } from './components/partners/action-button/action-button.component';
import { IconComponent } from './components/partners/icon/icon.component';
import { AddressDataCellComponent } from './components/partners/address-data-cell/address-data-cell.component';
import { CollectionDataCellComponent } from './components/partners/collection-data-cell/collection-data-cell.component';
import { AddPartnerComponent } from './components/partners/add-partner/add-partner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { DateDataCellComponent } from './components/employees/date-data-cell/date-data-cell.component';
import { StatusCellComponent } from './components/employees/status-cell/status-cell.component';
import { ApinvoiceListComponent } from './components/apinvoices/apinvoice-list/apinvoice-list.component';
import { AddApinvoiceComponent } from './components/apinvoices/add-apinvoice/add-apinvoice.component';
import { ApinvoicesService } from './service/apinvoices.service';
import { LoginComponent } from './components/login/login/login.component';
import { JwPaginationComponent } from './components/jw-pagination/jw-pagination.component';


const appRoutes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component: LoginComponent},

  {
     path: "",
     component: HomeComponent
   },
  {
    path: "partners",
    component: PartnersComponent
  },
  {
    path: "employees",
    component: EmployeesComponent
  },
  {
    path: "apinvoices",
    component: ApinvoicesComponent
  },
  {
    path: "accountings",
    component: AccountingsComponent
  },
  // {
  //   path: "**",
  //   component: LoginComponent
  // },
   {
     path: "**",
     component: HomeComponent
   },
  {
    path: "home",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PartnerListComponent,
    FilterPipe,
    SorterPipe,
    DataCellComponent,
    ActionButtonGroupComponent,
    ActionButtonComponent,
    IconComponent,
    PartnersComponent,
    AccountingsComponent,
    ApinvoicesComponent,
    EmployeesComponent,
    HomeComponent,
    AddressDataCellComponent,
    CollectionDataCellComponent,
    AddPartnerComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    DateDataCellComponent,
    StatusCellComponent,
    ApinvoiceListComponent,
    AddApinvoiceComponent,
    LoginComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    JwPaginationModule
  ],
  providers: [PartnersService, ApinvoiceListComponent, ApinvoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
