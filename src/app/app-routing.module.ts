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
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { AskACoachComponent } from './components/ask-a-coach/ask-a-coach.component';
import { BookASessionComponent } from './components/book-a-session/book-a-session.component';
import { PremiumSubscriptionComponent } from './components/premium-subscription/premium-subscription.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { Goal2Component } from './components/goal2/goal2.component';
import { Goal3Component } from './components/goal3/goal3.component';
import { Goal4Component } from './components/goal4/goal4.component';
import { Goal5Component } from './components/goal5/goal5.component';
import { JournalEntryComponent } from './components/journal-entry/journal-entry.component';
import { Schedule2Component } from './components/schedule2/schedule2.component';
import { CommunityComponent } from './components/community/community.component';
import { Connect2Component } from './components/connect2/connect2.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { OtpComponent } from './components/otp/otp.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MentorAvailabilityComponent } from './components/mentor-availability/mentor-availability.component';
import { BookMentorComponent } from './components/book-mentor/book-mentor.component';
import { AlarmDetailsComponent } from './components/alarm-details/alarm-details.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'alarm-details', component: AlarmDetailsComponent
  },
  {
    path: 'book-mentor', component: BookMentorComponent
  },
  {
    path: 'mentor-availability', component: MentorAvailabilityComponent
  },
  {
    path: 'reset-password', component: ResetPasswordComponent
  },
  {
    path: 'new-password', component: NewPasswordComponent
  },
  {
    path: 'otp', component: OtpComponent
  },
  {
    path: 'forget-password', component: ForgetPasswordComponent
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
    path: 'home', component: HomepageComponent
  },
  {
    path: 'goal1', component: Goal1Component
  },
  {
    path: 'progress', component: ProgressComponent
  },
  {
    path: 'connect', component: ConnectComponent
  },
  {
    path: 'subscription', component: SubscriptionComponent
  },
  {
    path: 'resources', component: ResourcesComponent
  },
  {
    path: 'schedule', component: ScheduleComponent
  },
  {
    path: 'self-assessment', component: SelfAssessmentComponent
  },
  {
    path: 'ask-a-coach', component: AskACoachComponent
  },
  {
    path: 'book-a-session', component: BookASessionComponent
  },
  {
    path: 'community', component: CommunityComponent
  },
  {
    path: 'premium-subscription', component: PremiumSubscriptionComponent
  },
  {
    path: 'calendar', component: CalendarComponent
  },
  {
    path: 'goal2', component: Goal2Component
  },
  {
    path: 'goal3', component: Goal3Component
  },
  {
    path: 'goal4', component: Goal4Component
  },
  {
    path: 'goal5', component: Goal5Component
  },
  {
    path: 'journal', component: JournalEntryComponent
  },
  {
    path: 'schedule2', component: Schedule2Component
  },
  {
    path: 'connect2', component: Connect2Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
