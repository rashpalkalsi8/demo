import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './components/goal/goal.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ExploreComponent } from './components/explore/explore.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Goal1Component } from './components/goal1/goal1.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ConnectComponent } from './components/connect/connect.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ScriptLoaderService } from './services/script-loader.service';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SelfAssessmentComponent } from './components/self-assessment/self-assessment.component';
import { AskACoachComponent } from './components/ask-a-coach/ask-a-coach.component';
import { BookASessionComponent } from './components/book-a-session/book-a-session.component';
import { PremiumSubscriptionComponent } from './components/premium-subscription/premium-subscription.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Goal2Component } from './components/goal2/goal2.component';
import { Goal3Component } from './components/goal3/goal3.component';
import { Goal4Component } from './components/goal4/goal4.component';
import { Goal5Component } from './components/goal5/goal5.component';
import { JournalEntryComponent } from './components/journal-entry/journal-entry.component';
import { Schedule2Component } from './components/schedule2/schedule2.component';
import { CommunityComponent } from './components/community/community.component';
import { Connect2Component } from './components/connect2/connect2.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { OtpComponent } from './components/otp/otp.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    ExploreComponent,
    PrivacyComponent,
    SettingsComponent,
    Goal1Component,
    ProgressComponent,
    ConnectComponent,
    SubscriptionComponent,
    ResourcesComponent,
    ScheduleComponent,
    SelfAssessmentComponent,
    AskACoachComponent,
    BookASessionComponent,
    PremiumSubscriptionComponent,
    CalendarComponent,
    Goal2Component,
    Goal3Component,
    Goal4Component,
    Goal5Component,
    JournalEntryComponent,
    Schedule2Component,
    CommunityComponent,
    Connect2Component,
    ForgetPasswordComponent,
    OtpComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    FormsModule, ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    CommonModule,
    MatToolbarModule,
    SlickCarouselModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
