import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';
import { Tpos } from './tpos';
@Injectable({
providedIn: 'root'
})

export class ApiService {
  redirectUrl!: string;
baseUrl:string = "http://localhost/btech_project/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }


public studentregistration(name: any,email: any,pwd: any,phone: any,branch: any) {
  return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd,phone,branch })
  .pipe(map(Users => {
  return Users;
  }));
  }
  
  public  getProfile(id: any) {
   
    console.log("getting Id "+id)
    return this.httpClient.get<Students>(this.baseUrl +'/getProfile.php?id='+id);
  
    }
    public  getTpoProfile(id: any) {
   
      console.log("getting Id "+id)
      return this.httpClient.get<Tpos>(this.baseUrl +'/getTpoProfile.php?id='+id);
    
      }
  
    public  updateProfile(id:any,name: any,email: any,phone: any,branch: any) {
  
      console.log("Id "+id+" from local stroage "+localStorage.getItem('id'));
      return this.httpClient.post(this.baseUrl +'/updateProfile.php',{id, name,email,phone,branch });
    
      }
      public  tpoUpdateProfile(id:any,name: any,email: any) {
  
        console.log("Id "+id+" from local stroage "+localStorage.getItem('id'));
        return this.httpClient.post(this.baseUrl +'/tpoUpdateProfile.php',{id, name,email});
      
        }
        public studentlogin(username: any, pwd: any) {
          alert(username)
          return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, pwd })
          .pipe(map(Students => {
          this.setToken(Students[0].id);
          localStorage.setItem('id',Students[0].id);
          this.getLoggedInName.emit(true);
          return Students;
          }));
          } 
public tpologin(username: any, password: any) {
  
  return this.httpClient.post<any>(this.baseUrl + '/tpologin.php', { username, password })
  .pipe(map(Tpos => {
  this.setToken(Tpos[0].id);
  localStorage.setItem('id',Tpos[0].id);
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