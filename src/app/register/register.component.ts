import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string ='';
  email : string ='';
  password :string ='';
  userData:any;
   arr:any=[];
  //local: any;
  register(){
   // alert('gdgdg')
   //var arr :any[]=[];
    this.userData = {

     //reg:[
         username: this.username, email :this.email,password : this.password

     // ]
    };
   
      this.arr.push(this.userData);
      // this.arr.push(JSON.parse(localStorage.getItem(this.arr)));
      console.log(this.arr);
      localStorage.setItem("userData", JSON.stringify(this.arr));

      
   
  }
  login(){
    
  }
    
   
  
}
