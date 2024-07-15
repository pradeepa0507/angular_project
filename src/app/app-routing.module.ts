import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApiRegisterComponent } from './api-register/api-register.component';
import { ApiLoginComponent } from './api-login/api-login.component';
import {ApiTableComponent} from './api-table/api-table.component';
import { ApiEditComponent } from './api-edit/api-edit.component';
import { ApiFileComponent } from './api-file/api-file.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ReportComponent } from './report/report.component';
import { DropdownModule } from 'primeng/dropdown';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [  
             {path: '', component:WelcomeComponent},
             {path: 'welcome',component:WelcomeComponent},
             {path: 'api-register',component: ApiRegisterComponent },
             {path: 'api-login',component: ApiLoginComponent },
             {path: 'api-table',component:ApiTableComponent},
             {path: 'api-edit',component:ApiEditComponent},
             {path: 'api-file',component:ApiFileComponent},
             {path: 'login', component: LoginComponent},
             {path: 'register', component: RegisterComponent},
             {path: 'table',component: TableComponent},
             {path: 'edit',component: EditComponent},
             {path: 'forget-password',component: ForgetPasswordComponent},
             {path: 'report',component: ReportComponent},
//{ path: '/login',   redirectTo: '/register', pathMatch: 'full' }
          ];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    DropdownModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
