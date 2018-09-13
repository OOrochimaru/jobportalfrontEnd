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
import { ContactusComponent } from './index/contactus/contactus.component';
import {GMapModule} from 'primeng/gmap';
import { PostjobComponent } from './index/postjob/postjob.component';
import { SignupComponent } from './index/signup/signup.component';
import { ForgetpassComponent } from './index/forgetpass/forgetpass.component';
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
    ContactusComponent,
    PostjobComponent,
    SignupComponent,
    ForgetpassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule,
    GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
