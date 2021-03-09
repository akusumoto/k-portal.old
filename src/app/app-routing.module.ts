import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events/events.component';
import { AuthComponent } from './auth/auth.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {path:'auth', component:AuthComponent},
  {path:'project', component:ProjectsComponent},
  {path:'project/:id', component:ProjectComponent},
  {path:'event', component:EventsComponent},
  {path:'event/:id', component:EventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
