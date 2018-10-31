import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { WorkoutComponent } from './workout/workout.component';
import { TrackComponent } from './track/track.component';
import { ViewallComponent } from './viewall/viewall.component';
import { ActiveworkoutComponent } from './activeworkout/activeworkout.component'
const routes:Routes=[
  //Route from landing page.
  {path:'viewall' ,component:ViewallComponent},
  {path:'create' , component:WorkoutComponent,data:{page:'createworkout'}},
  {path:'track' , component:TrackComponent},
  {path:'category',component:CategoryComponent},

  //Route from other screens.
  {path:'editworkout/:id',component:WorkoutComponent,data:{page:'editworkout'}},
  {path:'deleteworkout/:id',component:WorkoutComponent,data:{page:'deleteworkout'}},
  {path:'updateworkout/:id',component:WorkoutComponent,data:{page:'updateworkout'}},
  
  {path:'startworkout/:id',component:ActiveworkoutComponent,data:{page:'startworkout'}},
  {path:'endworkout/:id',component:ActiveworkoutComponent,data:{page:'endworkout'}},

];


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})], // <-- debugging purposes only
  exports:[ RouterModule]
 
})
export class AppRoutingModule { }
