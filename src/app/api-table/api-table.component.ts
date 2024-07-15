import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.css']
})
export class ApiTableComponent {
  users: any;
 
  constructor(private serverService: ServicesService,private router: Router) {
  }
  ngOnInit() {
    this.table_data();

  }
  table_data(){
    var api_req:any = new Object();
    var agents_req:any = new Object();
    agents_req.action="list";
    api_req.operation="ang";
    api_req.moduleType="ang";
    api_req.api_type="web"; 
    api_req.element_data = agents_req;
    console.log(api_req);
    this.serverService.sendServer(api_req).subscribe((response:any) => {
      console.log(response.result.data);
      if(response.status==true){
        this.users = response.result.data;
        console.log(this.users);
      }
    },
    (error)=>{
        console.log(error);
    });
  }
  edit(_id:any){
    
        var link =this.router.navigate(['/api-edit'],{ queryParams: { id:_id} })

       
      //  var link =this.router.navigate(['/api-edit'])

       
  }
  delete(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
    var api_req:any = new Object();
    var agents_req:any = new Object();
    agents_req.action="delete";
    agents_req.id=id;
    api_req.operation="ang";
    api_req.moduleType="ang";
    api_req.api_type="web"; 
    api_req.element_data = agents_req;
    console.log(api_req);
    this.serverService.sendServer(api_req).subscribe((response:any) => {
      console.log(response.result.data);
      if(response.result.data==1){
        this.users = response.result.data;
        Swal.fire(
          'Deleted!',
          'success'
        );
        this.table_data();
        console.log(this.users);
      }
    },
    (error)=>{
        console.log(error);
    });}})
  }
  upload(_id_:any){
    var link =this.router.navigate(['/api-file'],{ queryParams: { id:_id_} })
  }
}
