export class Postjobs {
    public Id: number;
    public companyname: string;
    public jobrole:string;
    public skills: string;
    public jobdescription: string;
    public compensation: string;
    public jobtype: string;

    constructor( Id: number, companyname: string, jobrole:string, skills: string, jobdescription: string, compensation: string, jobtype: string) {
    this.Id = Id;
    this.companyname = companyname;
    this.jobrole = jobrole;
    this.skills = skills;
    this.jobdescription = jobdescription;
    this.compensation = compensation;
    this.jobtype = jobtype;
    }
    
    }
