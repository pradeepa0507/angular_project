import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  //router:any;
  uservalue:any;
 username:any;
 email:any;
 password:any;
 index_id:any;
 update_values:any;
 index:any;
 indexToUpdate:any;
 // queryParams:any;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      this.username = params.username;
      // console.log(this.username);
      this.email = params.email;
      // console.log(this.email);
      this.password = params.password;
      // console.log(this.password);
      this.index_id = params.id;

      });
   }
  ngOnInit() {
    this.update_values = localStorage.getItem('userData')
    console.log(JSON.parse(this.update_values));
  }
  update(newItem:any){
  //     console.log(this.index_id);
  //     this.uservalue = {

        
  //       username: this.username, email :this.email,password : this.password

  // }
  // console.log(this.uservalue );
  var k =JSON.parse(this.update_values);
  // var ka =k.splice(this.index_id);   
  for(var i=0;i<=k.length;i++){
    console.log(k[this.index_id]);
    // return false;
    k[this.index_id].username=this.username;
    k[this.index_id].email=this.email;
    k[this.index_id].password=this.password;
  }
  localStorage.removeItem('userData');
  localStorage.setItem('userData',JSON.stringify(k));
 // this.uservalue=this.uservalue || [];
  // console.log( this.uservalue.push[this.update_values])   
  console.log(k);
  // newItem = newItem.target.find.length;
  //  this.indexToUpdate = this.update_values.item.findIndex((item: { id: any; }) => item.id === newItem);
  //  this.update_values.items[this.indexToUpdate] = newItem;
  //  console.log(this.update_values );


  //  for (let i = this.index_id ;i<=(JSON.parse(this.update_values).length); i++) {
  //   this.uservalue.push({''})
    //  console.log((this.update_values)[i].username);
     // console.log((this.update_values)[i].email);
   //  // console.log((this.update_values)[i].password);
 //if(this.update.value.email == JSON.parse(this.update_values)[i].email && this.update.value.password == JSON.parse(this.update_values)[i].password){

   //  }
   //} 
    // localStorage.setItem("userData", JSON.stringify(this.uservalue));
    //this.index = this.update_values.indexOf(this.username,this.email,this.password); 
  //  console.log(this.index)
  
}
}