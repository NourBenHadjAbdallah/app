import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './Component/clients/clients.component';
import { NavComponent } from './Component/nav/nav.component';
import { ToolComponent } from './Component/tool/tool.component';
import { UploadComponent } from './Upload/upload/upload.component';
import { ViewComponent } from './Component/view/view.component';
import { HomeComponent } from './Component/home/home.component';
import { SublevelMenuComponent } from './Component/nav/sublevel-menu.component';
import { UserLoginComponent } from './Component/Auth/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './Component/main/main.component';
import { BarComponent } from './Component/bar/bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesComponent } from './features/features.component';
import { ExtractComponent } from './extract/extract.component';
import { MetaDataComponent } from './meta-data/meta-data.component';
import { ParsedDataComponent } from './parsed-data/parsed-data.component';
import { FieldsComponent } from './fields/fields.component';
import { ExtractMenuComponent } from './extract-menu/extract-menu.component';
import { PagesComponent } from './pages/pages.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { BankStatementDataComponent } from './bank-statement-data/bank-statement-data.component';
import { StatementUploadComponent } from './Upload/statement-upload/statement-upload.component';
import { AllDataComponent } from './all-data/all-data.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavComponent,
    ToolComponent,
    UploadComponent,
    ViewComponent,
    HomeComponent,
    SublevelMenuComponent,
    UserLoginComponent,
    MainComponent,
    MainComponent,
    BarComponent,
    FeaturesComponent,
    ExtractComponent,
    MetaDataComponent,
    ParsedDataComponent,
    FieldsComponent,
    ExtractMenuComponent,
    PagesComponent,
    PdfViewComponent,
    ForgetPassComponent,
    BankStatementDataComponent,
    StatementUploadComponent,
    AllDataComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
