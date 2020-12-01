import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'course',
    component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
