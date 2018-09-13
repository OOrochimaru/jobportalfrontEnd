import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './index/footer/footer.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { LoginComponent } from './index/login/login.component';
import { AboutusComponent } from './index/aboutus/aboutus.component';
import { ContactusComponent } from './index/contactus/contactus.component';
import { PostjobComponent } from './index/postjob/postjob.component';
import { SignupComponent } from './index/signup/signup.component';
import { ForgetpassComponent } from './index/forgetpass/forgetpass.component';

const routes: Routes = [
  {path:"", component: IndexComponent},
  {path:"job", component: JobsearchComponent},
  {path:"login", component: LoginComponent},
  {path:"aboutus", component: AboutusComponent},
  {path:"contactus", component: ContactusComponent},
  {path:"postjob", component: PostjobComponent},
  {path:"signup", component: SignupComponent},
  {path:"forget", component: ForgetpassComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
