import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class ApiService {
  
redirectUrl: string ;
baseUrl:string = "http://localhost/btech_project/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }

public studentlogin(username: any, password: any) {

return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Students => {
this.setToken(Students[0].name);
this.getLoggedInName.emit(true);
return Students;
}));
}

public studentregistration(name: any,email: any,pwd: any) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
.pipe(map(Students => {
return Students;
}));
}

public tpologin(username: any, password: any) {
  
  return this.httpClient.post<any>(this.baseUrl + '/tpologin.php', { username, password })
  .pipe(map(Tpos => {
  this.setToken(Tpos[0].name);
  this.getLoggedInName.emit(true);

  return Tpos;
  }));
  }
  
  public tporegistration(name: any,email: any,pwd: any) {
  return this.httpClient.post<any>(this.baseUrl + '/tporegister.php', { name,email, pwd })
  .pipe(map(Tpos => {
  return Tpos;
  }));
  }

  public postjob( companyname: any,jobrole: any,skills: any,compensation: any,jobtype: any) {
    return this.httpClient.post<any>(this.baseUrl + '/post.php', { companyname,jobrole,skills,compensation,jobtype }, {observe :'response'})
    .pipe(map(Postjobs => {
      
    return Postjobs;
    }));
    }

    public getpostedjobs() {
      window.location.href = this.baseUrl +  "./posted.php";

      }

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}

}