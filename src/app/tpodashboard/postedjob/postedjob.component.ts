import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-postedjob',
  templateUrl: './postedjob.component.html',
  styleUrls: ['./postedjob.component.css']
})
export class PostedjobComponent implements OnInit {
  headers=['Company Name','Job Role','Job Type','Skills', 'Compensation', 'Job Type','PostedDate',''];
  posted:any =[];
  nojobs:any;
  totaljobs:any;
  errormsg:any;
  TPOName : string;
  successmsg:boolean=false;
  constructor(private router:Router,private activeroute:ActivatedRoute,private recservice:ApiService) { }

  ngOnInit() {
    this.TPOName ="Officer Name";
    this.postedjobs();
  }
  postedjobs()
  {
    
    window.location.href = "http://localhost/btech_project/php/posted.php";
  }
  logout()
    {
    this.recservice.deleteToken();
    window.location.href = "./tpologin";
    }
}
