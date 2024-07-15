import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $:any;
declare var iziToast:any;
@Component({
  selector: 'app-api-file',
  templateUrl: './api-file.component.html',
  styleUrls: ['./api-file.component.css']
})
export class ApiFileComponent {
  image:any;
  submitid: any;
  parsed_data:any;
  link:any;
  constructor(private serverService: ServicesService,private router: Router,private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      this.submitid = params.id;

      //console.log(this.submitid);
      });
  }
  submit(){
       var formData = new FormData();
       formData.append('operation', 'ang');
       formData.append('moduleType', 'ang');
       formData.append('api_type', 'web');
       formData.append('action', 'ang_file');
       formData.append("id",this.submitid);
       formData.append('image', $('#image')[0].files[0]);
      // console.log(formData);
      
      $.ajax({  
      
       url:"http://localhost/apitest/v1.0/index_new.php",  
        type : 'POST',
        data : formData,
        processData: false,  // tell jQuery not to process the data
        contentType: false,
        success: function success(data: string) {
          var parsed_data = JSON.parse(data);
          console.log(formData);
          if (parsed_data.status == "true") {
           
            iziToast.success({
              message: "Data updated successfully",
              position: 'topRight'
            });
          
  }else{
    iziToast.success({
      message: "Data updated failed",
      position: 'topRight'
    });
  }
 
  }
});
var link =this.router.navigate(['/api-table'])
  }}

