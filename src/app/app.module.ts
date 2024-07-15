import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';
import { ApiRegisterComponent } from './api-register/api-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiLoginComponent } from './api-login/api-login.component';
import { ApiTableComponent } from './api-table/api-table.component';
import { ApiEditComponent } from './api-edit/api-edit.component';
import { ApiFileComponent } from './api-file/api-file.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TableComponent,
    EditComponent,
    ApiRegisterComponent,
    ApiLoginComponent,
    ApiTableComponent,
    ApiEditComponent,
    ApiFileComponent,
    WelcomeComponent,
    ForgetPasswordComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
