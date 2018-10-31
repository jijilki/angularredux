import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { activeworkout } from '../activeworkout'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActiveworkoutService } from '../services/activeworkout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkoutComponent } from '../workout/workout.component';
import { WorkoutService } from '../services/workout.service';
import { workout } from '../workout';
@Component({
  selector: 'app-activeworkout',
  templateUrl: './activeworkout.component.html',
  styleUrls: ['./activeworkout.component.css']
})


export class ActiveworkoutComponent implements OnInit {

  workoutId: number;
  page: String;
  workoutPageAction: String;
  workoutPageHeader:String;
  activeWorkout: activeworkout;
  selWos: workout[];
  selectedworkouts: workout[];
  pipe = new DatePipe('en-US');

  activeWorkoutForm = new FormGroup({
    workout_id: new FormControl('', Validators.required),
    workout_title: new FormControl({disabled:true}, Validators.required),
    workout_note: new FormControl('', Validators.required),
    cbpm: new FormControl('', Validators.required),
    category: new FormGroup({
      _catId: new FormControl('', Validators.required),
      categoryName: new FormControl('', Validators.required),
    }),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    start_time: new FormControl('', Validators.required),
    end_time: new FormControl('', Validators.required),
    active_workout_id: new FormControl('', Validators.required)
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activeworkoutService: ActiveworkoutService,
    private workoutService: WorkoutService
  ) {

  }



  ngOnInit() {
    this.workoutId = Number(this.route.snapshot.paramMap.get('id'));
    this.page = this.route.snapshot.data.page;
    if (this.page === 'startworkout') {
      this.workoutPageAction = "Start";
      this.activeWorkout = new activeworkout();
      this.getWorkout(this.workoutId);
    }
  }

  endActiveWorkout() { }

  startOrStopWorkitem() {

    if (this.workoutPageAction === "Start") {
      console.log("Starting active work item");
      
      this.activeWorkout = new activeworkout();
       this.activeWorkout.start_date= this.activeWorkoutForm.controls['start_date'].value;
       this.activeWorkout.start_time = this.activeWorkoutForm.controls['start_time'].value;
       this.workoutPageHeader = "End";
      this.workoutPageAction = "End";
    }

    else {
       console.log("Ending active work item");
      // Saving it in Database.
     
      this.activeWorkout.end_date= this.activeWorkoutForm.controls['end_date'].value;
      this.activeWorkout.end_time = this.activeWorkoutForm.controls['end_time'].value;
      this.activeWorkout.workout = this.selectedworkouts[0];
      this.activeworkoutService.saveActiveWorkout(this.activeWorkout).subscribe(data=>{});
      this.workoutPageAction = "Start";
      this.workoutPageHeader = '';
      this.router.navigate(['/viewall']);
    }

  }




  getWorkout(workoutId: number) {
    this.workoutService.getAllWorkouts().subscribe(data => {
      this.selWos = data;
      this.selectedworkouts = this.selWos.filter(selectedwo => selectedwo.workout_id == workoutId)

      console.log(this.selectedworkouts);
      this.activeWorkoutForm.setValue({
        workout_id: this.selectedworkouts[0].workout_id,
        workout_title: this.selectedworkouts[0].workout_title,
        workout_note: this.selectedworkouts[0].workout_note,
        cbpm: this.selectedworkouts[0].cbpm,
        category: this.selectedworkouts[0].category,
        start_date: this.transformDate(Date.now()),
        end_date: this.transformDate(Date.now()),
        start_time: this.transformTime(Date.now()),
        end_time: this.transformTime(Date.now()),
        active_workout_id:0

      });

    });
  
  }

  transformDate(now) {
    const myFormattedDate = this.pipe.transform(now, 'dd-MM-yy');
    return myFormattedDate;
  }

  transformTime(now) {
    const myFormattedTime = this.pipe.transform(now, 'HH:mm:ss');
    return myFormattedTime;
  }

}
