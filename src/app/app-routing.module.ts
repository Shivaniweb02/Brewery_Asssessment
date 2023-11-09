import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'search',
  component:SearchComponent,
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'feedback',
  component:FeedbackComponent,
  pathMatch:'full'
},
{
  path:'register',
  component:RegisterComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
