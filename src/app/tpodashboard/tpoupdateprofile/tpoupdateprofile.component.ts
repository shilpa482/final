import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Students } from '../../students';
@Component({
  selector: 'app-tpoupdateprofile',
  templateUrl: './tpoupdateprofile.component.html',
  styleUrls: ['./tpoupdateprofile.component.css']
})
export class TpoupdateprofileComponent implements OnInit {
  alert: boolean = false
  tpoprofileForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.tpoprofileForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
  }
  ngOnInit() {
    const usertoken = this.dataService.getToken();
    this.dataService.getTpoProfile(usertoken)
      .subscribe(data => {
        this.tpoprofileForm = new FormGroup({
          id: new FormControl(data['Id']),
          name: new FormControl(data['name']),
          email: new FormControl(data['email']),
        

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
  postdata(tpoprofileForm: { value: { id: any, name: any; email: any }; }) {

    const usertoken = this.dataService.getToken();
    this.alert = true
    this.dataService.tpoUpdateProfile(usertoken, tpoprofileForm.value.name, tpoprofileForm.value.email)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['tpoupdateprofile']);

        },
        error => {
        });
  }

  closeAlert() {
    this.alert = false
    // throw new Error('Function not implemented.');
  }
}
