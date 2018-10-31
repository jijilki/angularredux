import { Component, OnInit } from '@angular/core';
import { workout } from '../workout';

import { WorkoutService } from '../services/workout.service'
import { Router } from '@angular/router';
//mock imports

//import { WORKOUTS } from '../mock/workoutmocks';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
  //workouts = WORKOUTS;
  workouts : workout[];
  workout:workout;
  viewWorkoutPageAction:String;

  constructor(private workoutService:WorkoutService ,private router:Router) { }

  ngOnInit() {
    //on init get all the workouts.
    this.getAllWorkouts();
    }

  getAllWorkouts():void{
    this.workoutService.getAllWorkouts().subscribe(data => this.workouts = data );
  }

  edit(workout:workout): void { 
    //alert('inside edit of '+ workout.title);
    this.router.navigate(['/editworkout/'+workout.workout_id]);
  };

  delete(workout:workout): void { 
    // alert('inside delete of '+ workout.workout_title);
    // var index = this.workouts.findIndex(x=>x.workout_title === workout.workout_title)
    // this.workouts.splice(index,1);
    this.router.navigate(['/deleteworkout/'+workout.workout_id]);
  };
  
  start(workout:workout): void { 
    this.viewWorkoutPageAction =='Start';
    this.router.navigate(['/startworkout/'+workout.workout_id]);
  };

  end(workout:workout): void { 
    this.viewWorkoutPageAction =='Start';
    this.router.navigate(['/endworkout/'+workout.workout_id]);
  };

}
