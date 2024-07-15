import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  userData:any;
  txt: any;
  
  //router: any;
  link:any;
 

 
  
  constructor(private router: Router) {
   
  }
  ngOnInit() {
  this.txt =  localStorage.getItem('userData');

this.table_data();
  }
  table_data(){
  //  var txt:any =  localStorage.getItem('userData');
    this.userData=JSON.parse(this.txt);
    console.log(this.userData)
//this.str=this.userData.split()
   // this.str = this.myArray.toString(); 
  
    
  }
  edit(_id:any){

    
    //this.truckService=document.getElementById(_id);
console.log(this.userData[_id])
     this.link =this.router.navigate(['/edit'],{ queryParams: { username: this.userData[_id].username, email: this.userData[_id].email,password:this.userData[_id].password,id:_id} })
     
     console.log(this.link)

  }
  delete(id:any){            
    var data:any=this.userData.splice(id, 1);
    console.log(data);
    localStorage.setItem('userData',JSON.stringify(this.userData))
  }
 
}
