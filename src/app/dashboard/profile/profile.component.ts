import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Students } from '../../students';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  alert: boolean = false
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      branch: ['', Validators.required]
    });
  }
  ngOnInit() {
    const usertoken = this.dataService.getToken();
    this.dataService.getProfile(usertoken)
      .subscribe(data => {
        this.profileForm = new FormGroup({
          id: new FormControl(data['Id']),
          name: new FormControl(data['name']),
          email: new FormControl(data['email']),
          phone: new FormControl(data['phone']),
          branch: new FormControl(data['branch'])

          // console.log(data[0]['name'])
        })
      }

      )

  }
  logout()
{
this.dataService.deleteToken();
window.location.href = "./login";
}
  postdata(profileForm: { value: { id: any, name: any; email: any; phone: any; branch: any; }; }) {

    const usertoken = this.dataService.getToken();
    this.alert = true
    this.dataService.updateProfile(usertoken, profileForm.value.name, profileForm.value.email, profileForm.value.phone, profileForm.value.branch)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['updateprofile']);

        },
        error => {
        });
  }

  closeAlert() {
    this.alert = false
    // throw new Error('Function not implemented.');
  }
}
