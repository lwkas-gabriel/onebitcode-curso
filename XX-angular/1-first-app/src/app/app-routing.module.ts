import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'eventscomponent', component: EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
