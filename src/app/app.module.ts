import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/pages/section0/page-not-found/page-not-found.component';
import { MainNavComponent } from './components/pages/navbars/0-main-nav/main-nav.component';
import { DjNavComponent } from './components/pages/navbars/1-dj-nav/dj-nav.component';
import { AdminNavComponent } from './components/pages/navbars/2-admin-nav/admin-nav.component';
import { SearchForASongComponent } from './components/pages/section0/search-for-asong/search-for-asong.component';
import { UpcomingRequestComponent } from './components/pages/section0/upcoming-request/upcoming-request.component';
import { SingerProfileComponent } from './components/pages/section0/singer-profile/singer-profile.component';
import { WelcomeComponent } from './components/pages/section0/welcome/welcome.component';
import { LoginRegisterComponent } from './components/pages/section0/login-register/login-register.component';
import { AUTHModule } from './components/AUTHModule/AUTH.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AUTHService } from './components/AUTHModule/AUTH.service';
import { AuthService } from './components/service/auth.service';
import { TokenInterceptorService } from './components/resolvers/token-interceptor.service';
import { InitilizeWebSiteComponent } from './components/pages/section2/initilize-web-site/initilize-web-site.component';
import { NewDJComponent } from './components/pages/section2/new-dj/new-dj.component';
import { SetUpNewPartyComponent } from './components/pages/section2/set-up-new-party/set-up-new-party.component';
import { UpdateSongFilesComponent } from './components/pages/section2/update-song-files/update-song-files.component';
import { AdmendPartyDetailsComponent } from './components/pages/section2/admend-party-details/admend-party-details.component';
import { ResetPasswordComponent } from './components/pages/section1/reset-password/reset-password.component';
import { ViewRequestsComponent } from './components/pages/section1/view-requests/view-requests.component';
import { ViewTeamsComponent } from './components/pages/section1/view-teams/view-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainNavComponent,
    DjNavComponent,
    AdminNavComponent,
    SearchForASongComponent,
    UpcomingRequestComponent,
    SingerProfileComponent,
    WelcomeComponent,
    LoginRegisterComponent,
    InitilizeWebSiteComponent,
    NewDJComponent,
    SetUpNewPartyComponent,
    UpdateSongFilesComponent,
    AdmendPartyDetailsComponent,
    ResetPasswordComponent,
    ViewRequestsComponent,
    ViewTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, // ng Angular Bootstrap
    AUTHModule,
    HttpClientModule, // HTTP client
    FormsModule, ReactiveFormsModule, // Forms
    // FileUploadModule  // ng file upload
  ],
  exports:[
    AUTHModule
  ],
  entryComponents: [  // navbar modals 
    // RenewModalContent,
    // LogInModalContent,
    // LogOutModalContent,
    // EditModalContent, // StartTimes Edit Modal
  ],
  providers: [
    AUTHService,
    AuthService,
    // FileService,
    // SiteService,
    // EmployeeService,
    // NoticeboardService,
    { // HTTP Interceptor set-up
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }