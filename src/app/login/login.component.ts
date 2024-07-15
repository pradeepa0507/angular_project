import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email : string ='';
password :string ='';
user: any;
login:any = FormGroup; 
  result: number | undefined;
  
constructor( private fb: FormBuilder,private router: Router) {
  // Form element defined below
  this.login = this.fb.group({
    'email': new FormControl(null),
    'password': new FormControl(null)
  });
}
submit(){
  console.log(this.login.value.email,this.login.value.password)
  //this.user={email:this.email,password:this.password};
var user_list:any = localStorage.getItem('userData');
console.log(JSON.parse(user_list));

//if (!(localStorage.getItem("infiniteScrollEnabled") == 'true' || localStorage.getItem("infiniteScrollEnabled") == 'false')) {
  for(let i=0;i<=(JSON.parse(user_list).length)-1;i++){
// alert("hi")

if(this.login.value.email == JSON.parse(user_list)[i].email && this.login.value.password == JSON.parse(user_list)[i].password){
  // alert("test")
  console.log(JSON.parse(user_list)[i].email);
  console.log(JSON.parse(user_list)[i].password);
this.result=1}}
  if(this.result==1){
    var link =this.router.navigate(['/table'])
    console.log(link);
   //console.log(alert('login sucessfully'))

  this.result=0
}else{
  console.log(alert('please register'))
}
}
}
