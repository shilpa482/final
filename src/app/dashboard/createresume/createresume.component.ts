import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Resume, Experience, Education, Skill, Project, ExtraCr, Lang, Hobbie } from './resume';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Students } from '../../students';
import { ScriptService } from './script.service';
declare let pdfMake: any;

@Component({
  selector: 'app-createresume',
  templateUrl: './createresume.component.html',
  styleUrls: ['./createresume.component.css']
})
export class CreateresumeComponent implements OnInit {

  resume = new Resume();

  degrees = ['B.Tech','SSC','HSC'];

  constructor(private scriptService: ScriptService,private dataService: ApiService,) {
    const userJson = localStorage.getItem('resume');
    this.resume = userJson !== null ? JSON.parse(userJson) : new Resume();
    if (!this.resume.experiences || this.resume.experiences.length === 0) {
      this.resume.experiences = [];
      this.resume.experiences.push(new Experience());
    }
    if (!this.resume.educations || this.resume.educations.length === 0) {
      this.resume.educations = [];
      this.resume.educations.push(new Education());
    }
    if (!this.resume.skills || this.resume.skills.length === 0) {
      this.resume.skills = [];
      this.resume.skills.push(new Skill());
    }
    if (!this.resume.projects || this.resume.projects.length === 0) {
      this.resume.projects = [];
      this.resume.projects.push(new Project());
    }
    if (!this.resume.langs || this.resume.langs.length === 0) {
      this.resume.langs = [];
      this.resume.langs.push(new Lang());
    }
    if (!this.resume.hobbies || this.resume.hobbies.length === 0) {
      this.resume.hobbies = [];
      this.resume.hobbies.push(new Hobbie());
    }
    if (!this.resume.extraCrs || this.resume.extraCrs.length === 0) {
      this.resume.extraCrs = [];
      this.resume.extraCrs.push(new ExtraCr);
    }

    console.log('Loading External Scripts');
    this.scriptService.load('pdfMake', 'vfsFonts');
  }
  ngOnInit(): void {

    const usertoken = this.dataService.getToken();
    this.dataService.getProfile(usertoken)
      .subscribe(data => {
        this.resume.name = data['name'],
        this.resume.email = data['email'],
        this.resume.contactNo = (Number(data['phone']))
        //this.resume.ed = data['branch']

      }

      )
    //throw new Error('Method not implemented.');
  }
  logout()
{
this.dataService.deleteToken();
window.location.href = "./login";
}
  addExperience() {
    this.resume.experiences.push(new Experience());
  }

  addEducation() {
    this.resume.educations.push(new Education());
  }

  generatePdf(action = 'open') {
    console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();

    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;

      default: pdfMake.createPdf(documentDefinition).open(); break;
    }

  }


  resetForm() {
    this.resume = new Resume();
  }

  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          text: '',
          bold: true,
          fontSize: 10,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: this.resume.name,
              style: 'name'
            },
            {
              text: this.resume.address,
              style: 'small'
            },
            {
              text: 'Email : ' + this.resume.email,
              style: 'small'
            },
            {
              text: 'Contant No : ' + this.resume.contactNo,
              style: 'small'
            },
            {
              text: 'LinkedIn: ' + this.resume.socialProfile,
              link: this.resume.socialProfile,
              color: 'blue',
              style: 'small'
            }
            ],
            [
              this.getProfilePicObject()
            ]
          ]
        },
        {
          text: 'Carrrier Objective',
          style: 'header'
        },
        {
          text: this.resume.carrerObjective
        },
        {
          text: 'Technical Skills',
          style: 'header'
        },
        {
          columns: [
            {
              ul: [
                ...this.resume.skills.filter((value, index) => index % 3 === 0).map(s => s.value),
                ...this.resume.skills.filter((value, index) => index % 3 === 1).map(s => s.value),
                
              ],
            }
          ],
          style: 'small'
        },
        {
          text: 'Internship Details',
          style: 'header'
        },
        this.getExperienceObject(this.resume.experiences),

        {
          text: 'Education',
          style: 'header'
        },
        this.getEducationObject(this.resume.educations),
        {
          text: 'Projects',
          style: 'header'
        },
        {
          columns: [
            {
              ul: [
                ...this.resume.projects.filter((value, index) => index % 3 === 0).map(s => s.value),
          
                ...this.resume.projects.filter((value, index) => index % 3 === 1).map(s => s.value),
        
                ...this.resume.projects.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ],
          style: 'small'
        },
        {
          text: 'Extra Curricular',
          style: 'header'
        },
        {
          columns: [
            {
              ul: [
                ...this.resume.extraCrs.filter((value, index) => index % 3 === 0).map(s => s.value),
          
                ...this.resume.extraCrs.filter((value, index) => index % 3 === 1).map(s => s.value),
          
                ...this.resume.extraCrs.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ],
          style: 'small'
        },
        {
          text: 'Languages',
          style: 'header'
        },
        {
          columns: [
            {
              ul: [
                ...this.resume.langs.filter((value, index) => index % 3 === 0).map(s => s.value),
          
                ...this.resume.langs.filter((value, index) => index % 3 === 1).map(s => s.value),
          
                ...this.resume.langs.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ],
          style: 'small'
        },
        {
          text: 'Hobbies',
          style: 'header'
        },
        {
          columns: [
            {
              ul: [
                ...this.resume.hobbies.filter((value, index) => index % 3 === 0).map(s => s.value),
            
                ...this.resume.hobbies.filter((value, index) => index % 3 === 1).map(s => s.value),
          
                ...this.resume.hobbies.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ],style: 'small'
        },
      ],
  
      styles: {
        header: {
          fontSize: 10,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 10,
          bold: true
        },
        internship: {
          fontSize: 10,
          decoration: 'underline'
        },
        small: {
          fontSize: 10,
        },
        edulittle: {
          fontSize: 4,
        },
        
        tableHeader: {
          bold: true,
        }
      }
    };
  }

  getExperienceObject(experiences: Experience[]) {

    const exs: { columns: (({ text: string | undefined; style: string; } | { text: string | undefined; style?: undefined; })[] | { text: string; alignment: string; })[]; }[][] = [];

    experiences.forEach(experience => {
      exs.push(
        [{
          columns: [
            [{
              text: 'Company : ' + experience.jobTitle,
              
              style: 'small'
            },
            {
              text: 'Job Role : ' + experience.employer ,
            
              style: 'small'
            },
            {
              text: 'Decription : ' + experience.jobDescription ,
            
              style: 'small'
            },
            
          ],
            {
              text: 'Duration : ' + experience.experience + ' Months',
              alignment: 'right',
             
            }
          ]
        }]
      );
    });

    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    };
  }

  getEducationObject(educations: Education[]) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'Degree',
            style: 'small'
          },
          {
            text: 'College',
            style: 'small'
          },
          {
            text: 'Passing Year',
            style: 'small'
          },
          {
            text: 'Result',
            style: 'small'
          },
          ],
          
          ...educations.map(ed => {
            return [ed.degree, ed.college, ed.passingYear, ed.percentage];
          
          })
          
        ]
        
      }
    };
  }

  getProfilePicObject() {
    if (this.resume.profilePic) {
      return {
        image: this.resume.profilePic,
        width: 75,
        alignment: 'right'
      };
    }
    return null;
  }
  fileChanged(e:any) {
    const file = e.target.files[0];
    
    this.getBase64(file);
  }

  getBase64(file: Blob) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.resume.profilePic = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  addSkill() {
    this.resume.skills.push(new Skill());
  }
  addProject() {
    this.resume.projects.push(new Project());
  }
  addExtra() {
    this.resume.extraCrs.push(new ExtraCr());
  }
  addLang() {
    this.resume.langs.push(new Lang());
  }
  addHobbies() {
    this.resume.hobbies.push(new Hobbie());
  }
  
}
