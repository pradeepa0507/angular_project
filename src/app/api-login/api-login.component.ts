import { Component } from '@angular/core';
//import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
declare var $:any;
declare var iziToast:any;
@Component({
  selector: 'app-api-login',
  templateUrl: './api-login.component.html',
  styleUrls: ['./api-login.component.css']
})
export class ApiLoginComponent {
  
 
  email : string ='';
  password :string ='';
  usersL: any;
  //user: any;
  //login:any = FormGroup; 
    //result: number | undefined;
    
  constructor( private serverService: ServicesService,private router: Router) {
    // Form element defined below
  }
  submit(){
   
    var api_req:any = new Object();
    var agents_req:any = new Object();
    agents_req.action="login";
    agents_req.email=this.email;
    agents_req.password=this.password;
    api_req.operation="ang";
    api_req.moduleType="ang";
    api_req.api_type="web"; 
    api_req.element_data = agents_req;
    console.log(api_req);
    this.serverService.sendServer(api_req).subscribe((response:any) => {
      console.log(response.result.data);
      if(response.result.data==1){
        iziToast.success({
          message: "sucessfully login",
          position: 'topRight'
          });
        var link =this.router.navigate(['/api-table'])
  }else{iziToast.success({
    message: "invalid mail and password",
    position: 'topRight'
    });}},
  (error)=>{
    console.log(error);
}
);

    }
  
 forget(_id: any){
  var link =this.router.navigate(['/forget-password'],{ queryParams: { id:_id} })
 } }
