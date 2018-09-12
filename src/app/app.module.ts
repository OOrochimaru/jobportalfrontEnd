import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './index/header/header.component';
import { FormsModule }   from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import { FooterComponent } from './index/footer/footer.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { FeaturedjobsComponent } from './index/featuredjobs/featuredjobs.component';
import { SearchjobComponent } from './jobsearch/searchjob/searchjob.component';
import { LoginComponent } from './index/login/login.component';
import { AboutusComponent } from './index/aboutus/aboutus.component';
import { Header2Component } from './index/header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    JobsearchComponent,
    FeaturedjobsComponent,
    SearchjobComponent,
    LoginComponent,
    AboutusComponent,
    Header2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
