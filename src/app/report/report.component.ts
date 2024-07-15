import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SelectItem } from 'primeng/api';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import * as ExcelJS from 'exceljs';
import { Readable } from 'stream';

declare var $: any;
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})


export class ReportComponent {
  selectedReport:any
  all_report: { all_reports: string; }[];
  date:any
  users: any;
  year: string | undefined;
  month: string | undefined;
  dateParts:any;
  constructor(private serverService: ServicesService,private router:Router){
    this.all_report = [

      { all_reports: 'agent' },
      { all_reports: 'value' },
    ];
   // this.date = '';
   
  }

  
  generate(){
    // console.log(this.date);
    // if(this.date){
    //  this.dateParts = this.date.split('-');
    // this.month=this.dateParts[1]
    // this.year=this.dateParts[0]
    // // console.log(this.month);
    // // console.log(this.year);
    // }
    // else{
    //   console.error('Date is not defined');
    // }

    var api_req:any = new Object();
    var agents_req:any = new Object();
    agents_req.action="Extension_Statistic";
    agents_req.date=$('#date').val();
    agents_req.month="";
    agents_req.year="";
    api_req.operation="testing";
    api_req.moduleType="testing";
    api_req.api_type="web"; 
    api_req.element_data = agents_req;
    //console.log(api_req);
    this.serverService.sendServer(api_req).subscribe((response:any) => {
      //console.log(response);

      if(response.status==true){
        this.users = response.result.data;
        //console.log(this.users);
       // this.exportAsExcelFile(this.users, 'report');

     
    //    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.users);
    // const workbook: XLSX.WorkBook = { Sheets: { 'pradeepa': worksheet }, SheetNames: ['pradeepa'] };
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Report');
    worksheet.mergeCells('D1:J1'); // Adjust the cell range as needed
    const titleCell = worksheet.getCell('D1');
    titleCell.value = 'Daily Report';
    titleCell.font = { name: 'Arial', family: 4, size: 16, bold: true };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    // let headerRow:any[] = []
    // const headerRow = worksheet.getCell('C1');
    // headerRow.value = this.users[0];
    // // let headerRow:any =worksheet.getCell('C1');
    const headerRow = worksheet.addRow(['', '', ...Object.keys(this.users[0])]);
    //const headerRow = worksheet.addRow(Object.keys(this.users[0]));
    headerRow.eachCell((cell:any,colNumber) => {
      if (colNumber >= 3) {
      cell.font = { bold: true };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ADD8E6' },
        bgColor: { argb: 'ADD8E6' }
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    }
    });
  
    // Add data rows and apply style
    this.users.forEach((data:any) => {
      const row = worksheet.addRow(['', '', ...Object.values(data)]);

      //const row = worksheet.addRow(Object.values(data));
     // console.log(data);
      row.eachCell((cell, colNumber) => {
        if (colNumber >= 3) {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFF00' },
          bgColor: { argb: 'FFFF00' }
        };
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
      }
      });
    
    });



    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const data: Blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
    // FileSaver.saveAs(data, 'pradeepa' + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
   // Save workbook to buffer
   workbook.xlsx.writeBuffer().then((buffer) => {
    const blobData: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    FileSaver.saveAs(blobData, 'pradeepa' + '_export_' + new Date().getTime() + '.xlsx');
  });

      }
    });
  } 
  get_rep() {
    //this.selectedReport = $("#all_report").val();
    
    
    // if (this.selectedReport == 'agent') {
    //      //this.generate();
    // }
    // else if (this.selectedReport='value'){
    //      console.log('yy')
    // }
  }

 
}
