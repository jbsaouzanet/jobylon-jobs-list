import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { JobComponent } from './layouts/job/job.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'jobs-list', component: MainComponent },
  { path: 'job/:id', component: JobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
