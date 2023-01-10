import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required],
name: ['', Validators.required],
phone: ['', Validators.required],
branch: ['', Validators.required]
});
}

ngOnInit() {
}

postdata(angForm1: { value: { name: string; email: any; password: any;phone: any; branch: any; }; })
{
    var encodedString = btoa(angForm1.value.password);
    console.log("At the time of registartion :"+encodedString);  
this.dataService.studentregistration(angForm1.value.name,angForm1.value.email,encodedString,angForm1.value.phone,angForm1.value.branch)
.pipe(first())
.subscribe(
    (data: any) => {
this.router.navigate(['login']);
},

    (error: any) => {
});
}

get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
get name() { return this.angForm.get('name'); }
get phone() { return this.angForm.get('phone'); }
get branch() { return this.angForm.get('branch'); }
}