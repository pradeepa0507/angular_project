import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
declare var $:any;

//import { izitoast } from 'izitoast';

declare var iziToast:any;

@Component({
  selector: 'app-api-register',
  templateUrl: './api-register.component.html',
  styleUrls: ['./api-register.component.css']
})
export class ApiRegisterComponent {
  username: string ='';
  email : string ='';
  password :string ='';
  api_req:any;
  agents_req: any;
  usersL: any;
  //local: any;
  constructor(private serverService: ServicesService,private router:Router) { }

  register(){
   // alert('gdgdg')
   //var arr :any[]=[];
    var api_req:any = new Object();
    var agents_req:any = new Object();
    agents_req.action="add_dt";
    agents_req.username=this.username;
    agents_req.email=this.email;
    agents_req.password=this.password;
    api_req.operation="ang";
    api_req.moduleType="ang";
    api_req.api_type="web"; 
    api_req.element_data = agents_req;
    console.log(api_req);
    this.serverService.sendServer(api_req).subscribe((response:any) => {
      console.log(response.result.data);
      if(response.result.data==true){
        $('#username').val('');
        $('#email').val('');
        $('#password').val('');
        this.usersL = response.result.data;
       iziToast.success({
         message: "sucessfully register",
         position: 'topRight'
         });
     }else {
       iziToast.error({
         message: "you have already register so,please login!",
         position: 'topRight'
         });
         
      }
    },
    (error)=>{
        console.log(error);

    });
    }
    login(){}
}
