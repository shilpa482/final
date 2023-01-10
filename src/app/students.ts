export class Students {
    public Id: number;
    public name: string;
    public pwd:string;
    public email:string;
    public phone:string;
    public branch:string;


    
    constructor(Id:number,name: string,pwd:string,email:string,phone:string,branch:string) {
    this.Id = Id;
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    this.phone=phone;
    this.branch=branch;
    }
    }