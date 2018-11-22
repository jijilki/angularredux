import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import 'rxjs/add/operator/switchMap';
import { workout } from '../workout';
import { category } from '..//category';
import { WorkoutService } from '../services/workout.service';
import { CategoryService } from '../services/category.service';

//State info -Redux
 import { NgRedux, select } from '@angular-redux/store';
 import {IAppState} from '../../store';
 import {ADD_CAT,GET_ONE_WO,CRE_WO,DEL_WO} from '../action';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workoutId: String;
  page: String;
  selectedworkouts: workout[];
  selWos: workout[];
  workouts: workout[];
  workout: workout;
  workoutPageAction: String;
  categories: category[];
  workoutForm = new FormGroup({
    workout_id: new FormControl('', Validators.required),
    workout_title: new FormControl('', Validators.required),
    workout_note: new FormControl('', Validators.required),
    cbpm: new FormControl('', Validators.required),
    category: new FormGroup({
      _catId: new FormControl('', Validators.required),
      categoryName: new FormControl('', Validators.required)
    })


  });
  @select() categoryArr;
  @select() workoutArr ;
  @select() editWorkout

  constructor(
    //This introduced for the snapshot error.
    private route: ActivatedRoute,
    private router: Router,
    private workoutService: WorkoutService,
    private categoryService: CategoryService,
    private ngRedux: NgRedux<IAppState>
  ) {
  }



  ngOnInit() {
    this.getCategories();
    //Get details from Router
    this.workoutId = this.route.snapshot.paramMap.get('id');
    this.page = this.route.snapshot.data.page;
    if (this.page === 'editworkout') {
      this.workoutPageAction = "Update";
      this.getWorkout(Number(this.workoutId));
    }
    else if (this.page === 'createworkout') {
      this.workout = new workout();
      // this.selectedworkouts.push(this.workout);
    }
    else if (this.page === 'deleteworkout') {
      this.deleteWorkout(Number(this.workoutId));
    }
  }




  getWorkout(workoutId: number) {
    
    //alert("Inside get Workout");
    //this.workoutService.getAllWorkouts().subscribe(data =>{
    
  //  this.workoutService.getAllWorkouts().subscribe(data => {
   //this.selWos = data;
  //// this.ngRedux.dispatch({type:GET_ONE_WO,value:workoutId});
     // this.selectedworkouts = this.selWos.filter(selectedwo => selectedwo.workout_id == workoutId)
     this.selectedworkouts = this.ngRedux.getState().workoutArr.filter(workout => workout.workout_id === workoutId);
      console.log(this.selectedworkouts);
      this.workoutForm.setValue({
        workout_id: this.selectedworkouts[0].workout_id,
        workout_title: this.selectedworkouts[0].workout_title,
        workout_note: this.selectedworkouts[0].workout_note,
        cbpm: this.selectedworkouts[0].cbpm,
        category: this.selectedworkouts[0].category
      });

  //  });
    //this.workoutService.getAllWorkouts().subscribe(data => this.selectedworkouts = data );

  }

  insertupdateWorkout(workout: workout) {
    this.ngRedux.dispatch({type:CRE_WO,value:workout});
    this.router.navigate(['/viewall']);
    // this.workoutService.saveWorkout(workout).subscribe(data => {
    //   console.log("Workout inserted/updated");
    //   this.router.navigate(['/viewall']);
    // })
  }




  onWorkoutFormSubmit() {
    console.log("Inside onWorkoutFormSubmit");
    let workout = this.workoutForm.value;
    if (workout._id === undefined || workout._id === "") {
      //GetMax id from the table and assign

    }

    this.insertupdateWorkout(workout);
  };

  getCategories() {
    this.categories = this.categoryArr;
    console.log(this.categoryArr);
   // this.categoryService.getCategoryList().subscribe(data => { console.log("getting category"); this.categories = data });
    //this.workoutService.getAllWorkouts().subscribe(data => this.workouts = data );
  };

  deleteWorkout(workout_id: number) {
    this.ngRedux.dispatch({type:DEL_WO,action:workout_id});
   /* this.workoutService.deleteWorkout(workout_id).subscribe(data => {
      console.log("Workout deleted");
      this.router.navigate(['/viewall']);
    });
*/
  }

  minus(){
     this.workoutForm.controls['cbpm'].setValue(this.round(Math.abs(this.workoutForm.controls.cbpm.value)-0.1,1));

   }
 
   plus(){
     this.workoutForm.controls['cbpm'].setValue(this.round(Math.abs(this.workoutForm.controls.cbpm.value)+0.1,1));
   }

    round(number, precision) {
  var shift = function (number, exponent) {
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + exponent) : exponent));
  };
  return shift(Math.round(shift(number, +precision)), -precision);
}

}
