import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  emailid: any;
  api_req: any;
  
  constructor(private serverService: ServicesService,private router: Router,private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      //console.log(params);
      this.emailid = params.id;
    console.log(this.emailid);})}
    
ngOnInit() {
  this.forgot();
}

forgot(){
   var api_req:any = new Object();
   var agents_req:any = new Object();
   agents_req.action="get_email";
   agents_req.email=this.emailid;
   api_req.operation="ang";
    api_req.moduleType="ang";
    api_req.api_type="web"; 
    api_req.element_data = agents_req;
    console.log(api_req);
    this.serverService.sendServer(api_req).subscribe((response:any) => {
      console.log(response);
      if(response.status==true){
       

      }

})

}
}
