import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ViewComponent } from './Component/view/view.component';
import { UploadComponent } from './Upload/upload/upload.component';
import { ClientsComponent } from './Component/clients/clients.component';
import { UserLoginComponent } from './Component/Auth/user-login/user-login.component';
import { MainComponent } from './Component/main/main.component';
import { FeaturesComponent } from './features/features.component';
import { ParsedDataComponent } from './parsed-data/parsed-data.component';
import { MetaDataComponent } from './meta-data/meta-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ExtractComponent } from './extract/extract.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { BankStatementDataComponent } from './bank-statement-data/bank-statement-data.component';
import { StatementUploadComponent } from './Upload/statement-upload/statement-upload.component';
import { AllDataComponent } from './all-data/all-data.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'view', component: ViewComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'main', component: MainComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'clientTransactions', component: ParsedDataComponent},
  { path: 'upload', component: UploadComponent},
  { path: 'extract', component: ExtractComponent},
  { path: 'bankstatements', component: BankStatementDataComponent},
  { path: 'forgetpass', component: ForgetPassComponent},
  { path: 'alldata', component: AllDataComponent},
  { path: 'uploadStatement', component: StatementUploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule],
  exports: [RouterModule,
    FormsModule,
    ReactiveFormsModule]
})
export class AppRoutingModule { }
