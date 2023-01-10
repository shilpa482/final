import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TpologinComponent } from './tpologin/tpologin.component';
import { TporegisterComponent } from './tporegister/tporegister.component';
import { TpodashboardComponent } from './tpodashboard/tpodashboard.component';
import { PostjobComponent } from './tpodashboard/postjob/postjob.component';
import { PostedjobComponent } from './tpodashboard/postedjob/postedjob.component';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateprofileComponent } from './dashboard/updateprofile/updateprofile.component';
import { CreateresumeComponent } from './dashboard/createresume/createresume.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TpoupdateprofileComponent} from './tpodashboard/tpoupdateprofile/tpoupdateprofile.component';
import { TpoprofileComponent } from './tpodashboard/tpoprofile/tpoprofile.component';
import { SchedularComponent } from './tpodashboard/schedular/schedular.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TpologinComponent,
    TporegisterComponent,
    TpodashboardComponent,
    PostjobComponent,
    UpdateprofileComponent,
    CreateresumeComponent,
    PostedjobComponent,
    ProfileComponent,
    TpoupdateprofileComponent,
    TpoprofileComponent,
    SchedularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgbModalModule,
    SocialLoginModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '203098550516-4j2o4tsmkb4l4ndmn5e6ak0o5dbbflgb.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
