export class Resume {
  profilePic: string | undefined;
  name: string | undefined;
  address: string | undefined;
  contactNo: number | undefined;
  email: string | undefined;
  socialProfile: string | undefined;
  experiences: Experience[] = [];
  educations: Education[] = [];
  //otherDetails: string | undefined;
  carrerObjective: string | undefined;
  skills: Skill[] = [];
  projects: Project[] = [];
  extraCrs:ExtraCr[] = [];
  langs: Lang[] = [];
  hobbies: Hobbie[] = [];
  

  constructor() {
    this.experiences.push(new Experience());
    this.educations.push(new Education());
    this.skills.push(new Skill());
    this.projects.push(new Project());
    this.extraCrs.push(new ExtraCr());
    this.langs.push(new Lang());
    this.hobbies.push(new Hobbie());

  }
}

export class Experience {
  employer: string | undefined;
  jobTitle: string | undefined;
  jobDescription: string | undefined;
  startDate: string | undefined;
  experience: number | undefined;
}

export class Education {
  degree: string | undefined;
  college: string | undefined;
  passingYear: string | undefined;
  percentage: number | undefined;
}

export class Skill {
  value: string | undefined;
}
export class Project {
  value: string | undefined;
}
export class ExtraCr {
  value: string | undefined;
}
export class Hobbie {
  value: string | undefined;
}
export class Lang {
  value: string | undefined;
}

