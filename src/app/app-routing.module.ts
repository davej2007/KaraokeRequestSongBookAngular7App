import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/pages/section0/welcome/welcome.component';
import { SearchForASongComponent } from './components/pages/section0/search-for-asong/search-for-asong.component';
import { UpcomingRequestComponent } from './components/pages/section0/upcoming-request/upcoming-request.component';
import { SingerProfileComponent } from './components/pages/section0/singer-profile/singer-profile.component';
import { DjNavComponent } from './components/pages/navbars/1-dj-nav/dj-nav.component';
import { PageNotFoundComponent } from './components/pages/section0/page-not-found/page-not-found.component';
import { AdminNavComponent } from './components/pages/navbars/2-admin-nav/admin-nav.component';
import { LoginRegisterComponent } from './components/pages/section0/login-register/login-register.component';
import { InitilizeWebSiteComponent } from './components/pages/section2/initilize-web-site/initilize-web-site.component';
import { ResetPasswordComponent } from './components/pages/section1/reset-password/reset-password.component';
import { ViewRequestsComponent } from './components/pages/section1/view-requests/view-requests.component';
import { ViewTeamsComponent } from './components/pages/section1/view-teams/view-teams.component';
import { SetUpNewPartyComponent } from './components/pages/section2/set-up-new-party/set-up-new-party.component';
import { UpdateSongFilesComponent } from './components/pages/section2/update-song-files/update-song-files.component';
import { AdmendPartyDetailsComponent } from './components/pages/section2/admend-party-details/admend-party-details.component';
import { NewDJComponent } from './components/pages/section2/new-dj/new-dj.component';
import { RedirectAfterLoginComponent } from './components/pages/navbars/0-main-nav/0-redirect-after-login/redirect-after-login.component';


const routes: Routes = [
  { path:'', component:WelcomeComponent},
  { path:'afterLogin', component:RedirectAfterLoginComponent},
  { path:'loginRegister', component:LoginRegisterComponent},
  { path:'searchSong', component:SearchForASongComponent},
  { path:'upcomingRequest', component:UpcomingRequestComponent},
  { path:'profile', component:SingerProfileComponent},
  { path      : 'adminDJ',
    component : DjNavComponent,
    children  : [ { path:'',                  component: PageNotFoundComponent },
                  { path:'resetPassword',     component: ResetPasswordComponent },
                  { path:'viewRequests',      component: ViewRequestsComponent },
                  { path:'viewTeams',         component: ViewTeamsComponent },
                  { path:'**',                component: PageNotFoundComponent }
              ]},
  { path      : 'adminSetUp',
    component : AdminNavComponent,
    children  : [ { path:'',                  component: PageNotFoundComponent },
                  { path:'setupNewParty',     component: SetUpNewPartyComponent },
                  { path:'updateSongFiles',   component: UpdateSongFilesComponent },
                  { path:'admendPartyDetails',component: AdmendPartyDetailsComponent },
                  { path:'newDJ',             component: NewDJComponent },
                  { path:'**',                component: PageNotFoundComponent }
              ]},
  { path:'initilizeWebSite', component: InitilizeWebSiteComponent },            
  { path:'**',               component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
