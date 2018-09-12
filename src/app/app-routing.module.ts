import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './index/footer/footer.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { LoginComponent } from './index/login/login.component';
import { AboutusComponent } from './index/aboutus/aboutus.component';

const routes: Routes = [
  {path:"", component: IndexComponent},
  {path:"job", component: JobsearchComponent},
  {path:"login", component: LoginComponent},
  {path:"aboutus", component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
