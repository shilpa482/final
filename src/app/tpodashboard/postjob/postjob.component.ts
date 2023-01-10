import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  postjobForm: FormGroup;
  postedMsg : any;
  alreadyposted:any;
  errormsg:any;
  loginbtn:boolean;
  logoutbtn:boolean;
  TPOName : string;

  constructor(private router: Router, private dataService: ApiService, private fb: FormBuilder) {
    this.postjobForm = this.fb.group({
      companyname: ['', Validators.required],
      jobrole: ['', Validators.required],
      skills: ['', Validators.required],
      jobdescription: ['', Validators.required],
      compensation: ['', Validators.required],
      jobtype: ['', Validators.required],
      
    })
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
    console.log("loggedin");
    this.loginbtn=false;
    this.logoutbtn=true
    }
    else{
    this.loginbtn=true;
    this.logoutbtn=false
    }
    
    }

    ngOnInit() {
      this.TPOName ="Officer Name";
      
    }

    
    private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
    }
    logout()
    {
    this.dataService.deleteToken();
    window.location.href = "./tpologin";
    }

    postdata(postjobForm1: { value: { companyname: any; jobrole: any; skills: any;compensation: any; jobtype: any;}; })
    {
    this.dataService.postjob(postjobForm1.value.companyname,postjobForm1.value.jobrole,postjobForm1.value.skills,postjobForm1.value.compensation,postjobForm1.value.jobtype)
    .pipe(first())
    .subscribe(
    data => {
      alert("job data posted successfully")
    this.router.navigate(['./tpodashboard']);
    },

      
      error => {
        alert("Please fill all fields")
      });
    }
    get companyname() { return this.postjobForm.get('companyname'); }
    get jobrole() { return this.postjobForm.get('jobrole'); }
    get skills() { return this.postjobForm.get('skills'); }

    get compensation() { return this.postjobForm.get('compensation'); }
    get jobtype() { return this.postjobForm.get('jobtype'); }

   }

  


 