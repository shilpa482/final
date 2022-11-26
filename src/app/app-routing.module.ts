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
const routes: Routes = [
{path:'',redirectTo:'tpologin',pathMatch:'full'}, 
{ path: 'login', component: LoginComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'tpologin', component: TpologinComponent },
{ path: 'tporegistration', component: TporegisterComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{ path: 'tpodashboard', component: TpodashboardComponent,canActivate: [AuthguardGuard] },
{ path: 'tpodashboard/postjob', component:  PostjobComponent},
{ path: 'tpodashboard/postedjob', component:  PostedjobComponent}

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }