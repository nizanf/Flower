import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './ui/main/main.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo : '/homePage', pathMatch: 'full' },
  {path: 'homePage', component: MainComponent},
  {path: 'toolbar', component: MainComponent},
  { path: 'not-found', component: PageNotFoundComponent, data: {message: 'page not found!'} },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
