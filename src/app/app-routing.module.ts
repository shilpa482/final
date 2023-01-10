import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { TpologinComponent} from './tpologin/tpologin.component';
import { TporegisterComponent} from './tporegister/tporegister.component';
import { TpodashboardComponent } from './tpodashboard/tpodashboard.component';
import { PostjobComponent } from './tpodashboard/postjob/postjob.component';
import { PostedjobComponent } from './tpodashboard/postedjob/postedjob.component';
import { UpdateprofileComponent } from './dashboard/updateprofile/updateprofile.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TpoupdateprofileComponent} from './tpodashboard/tpoupdateprofile/tpoupdateprofile.component';
import { TpoprofileComponent } from './tpodashboard/tpoprofile/tpoprofile.component';
import { SchedularComponent } from './tpodashboard/schedular/schedular.component';
import { CreateresumeComponent } from './dashboard/createresume/createresume.component';
const routes: Routes = [
    { path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'tpologin', component: TpologinComponent },
{ path: 'tporegister', component: TporegisterComponent },
{ path: 'tpodashboard', component: TpodashboardComponent },
{ path: 'tpodashboard/postjob', component:  PostjobComponent},
{ path: 'tpodashboard/postedjob', component:  PostedjobComponent},
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{ path: 'dashboard/updateprofile', component: UpdateprofileComponent },
{ path: 'dashboard/createresume', component: CreateresumeComponent },
{ path: 'dashboard/profile', component: ProfileComponent },
{ path: 'tpodashboard/tpoupdateprofile', component: TpoupdateprofileComponent },
{ path: 'tpodashboard/tpoprofile', component: TpoprofileComponent },
{ path: 'tpodashboard/schedular', component: SchedularComponent }
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }