import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $:any;
//declare var iziToast:any;

@Component({
  selector: 'app-api-edit',
  templateUrl: './api-edit.component.html',
  styleUrls: ['./api-edit.component.css']
})
export class ApiEditComponent {
  username:any;
  email:any;
  password:any;
  users: any;
  editid: any;
  constructor(private serverService: ServicesService,private router: Router,private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      this.editid = params.id;

      console.log(this.editid);
      });
  }
  ngOnInit() {
this.edit_data();
  }
  edit_data(){
   /* Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to edit this!",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it!'
    }).then((result) => {
      if (result.value) {*/
    var api_req:any = new Object();
    var agents_req:any = new Object();
    agents_req.action="edit";
    agents_req.id=this.editid;
    console.log(agents_req.id);
    api_req.operation="ang";
    api_req.moduleType="ang";
    api_req.api_type="web"; 
    api_req.element_data = agents_req;
    console.log(api_req);
    this.serverService.sendServer(api_req).subscribe((response:any) => {
      console.log(response);
      if(response.status==true){
        // this.users = response.result.data;
        $('#username').val(response.result.data.username);
        $('#email').val(response.result.data.email);
        $('#password').val(response.result.data.password);

       
      //  var link =this.router.navigate(['/api-edit'])

        // console.log(this.users);
      }
    },
    (error)=>{
        console.log(error);
    });}//})
  //}
update()
{
 var api_req:any = new Object();
    var agents_req:any = new Object();
    agents_req.action="update";
    agents_req.id=this.editid;
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
      if(response.status==true){
        $('#username').val('');
        $('#email').val('');
        $('#password').val('');
        this.users = response.result.data; 
        Swal.fire(
          'updated!',
          'success'
        );
        var link =this.router.navigate(['/api-table'])

  //      console.log(this.users);
      }
    },
    (error)=>{
        console.log(error);
    });
}
back(){
  var link =this.router.navigate(['/api-table'])
}
}
