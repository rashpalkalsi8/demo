import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ExploreComponent } from './components/explore/explore.component';
import { GoalComponent } from './components/goal/goal.component';
import { Goal1Component } from './components/goal1/goal1.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ConnectComponent } from './components/connect/connect.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: 'privacy', component: PrivacyComponent
  },
  {
    path: 'explore', component: ExploreComponent
  },
  {
    path: 'goal', component: GoalComponent
  },
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'goal1', component: Goal1Component
  },
  {
    path: 'progress', component: ProgressComponent
  },
  {
    path: 'connect', component: ConnectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
