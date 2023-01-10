
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";

@Component({
selector: 'app-tpologin',
templateUrl: './tpologin.component.html',
styleUrls: ['./tpologin.component.css']
})
export class TpologinComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router,private authService: SocialAuthService) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required]
});
}
user:any;
loggedin:any;
ngOnInit() {

  this.authService.authState.subscribe(user => {
   
    if (user) {
      this.user = user;
      console.log(user);            
// Set the UserId
       sessionStorage.setItem('userId',"user");
       this.router.navigate([ '/tpodashboard']);
      
    } else {
      this.user = null;
      this.router.navigate([ '/tpologin']);
    }
    if (!sessionStorage.getItem('userId')) {
      console.log('wrj')
      this.router.navigate(['/login']); // i think initially you are redirecting to login so put condition there in app component
    }
  });
}

public signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}
public signOut(): void {
  this.authService.signOut();
}

postdata(angForm1: { value: { email: any; password: any; }; })
{
  var encodedString = btoa(angForm1.value.password);
    console.log("At the time of login :"+encodedString); 
this.dataService.tpologin(angForm1.value.email,encodedString)
.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/tpodashboard';
this.router.navigate([redirect]);
},
error => {
alert("User name or password is incorrect")
});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
}