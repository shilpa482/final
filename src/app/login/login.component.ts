
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm , FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {

}

ngOnInit() {
  this.angForm = this.fb.group({
    email: new FormControl('', Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@cumminscollege.in"),Validators.minLength(1), Validators.email])),
    password: new FormControl('', Validators.required)
    });
}
postdata(angForm: { value: { email: any; password: any; }; })
{
this.dataService.studentlogin(angForm.value.email,angForm.value.password)
.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
this.router.navigate([redirect]);
},
error => {
alert("User name or password is incorrect")
});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
}