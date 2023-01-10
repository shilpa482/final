import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-tporegister',
templateUrl: './tporegister.component.html',
styleUrls: ['./tporegister.component.css']
})

export class TporegisterComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required],
name: ['', Validators.required]
});
}

ngOnInit() {
}

postdata(angForm1: { value: { name: any; email: any; password: any; }; })
{
    var encodedString = btoa(angForm1.value.password);
    console.log("At the time of registartion :"+encodedString); 
this.dataService.tporegistration(angForm1.value.name,angForm1.value.email,encodedString)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['tpologin']);
},

error => {
});
}

get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
get name() { return this.angForm.get('name'); }
}