import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ConnectComponent
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
    SlickCarouselModule
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
