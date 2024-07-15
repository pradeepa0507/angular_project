import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  post: any;

  constructor(private http : HttpClient) { }
  sendServer(postData: any[]) : Observable<any> {
  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };
 
return this.http.post("http://localhost/apitest/v1.0/index.php", postData, httpOptions);
 }

 sendServerfile(postData: any[]) {
  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };
 
return this.http.post("http://localhost/apitest/v1.0/index_new.php", postData, httpOptions);
 


}
}
