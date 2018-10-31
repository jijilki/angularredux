import { Component, OnInit, MissingTranslationStrategy } from '@angular/core';
import { ActiveworkoutService } from '../services/activeworkout.service';
import { activeworkout } from '../activeworkout';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

    id1 = 'chart1';
    id2 = 'chart2';
    id3 = 'chart3';
    width = 600;
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    //dataSource;
    activeworkouts: activeworkout[];
    activeWorkoutLoaded: boolean;
    pipe = new DatePipe('en-US');


    totalWorkoutToday:number =0;
    totalWorkoutThisWeek:number =0;
    totalWorkoutThisMonth:number=0;
    monthCalBurn:number=0;
    yearCalBurn:number=0;
    weekCalBurn:number=0;
    dataSource = {
        "chart": {
            "caption": "Week Mart",
            "subCaption": "Top 5 stores in last month by revenue",
            "numberprefix": "$",
            "theme": "fint"
        },
        "data": [
            {
                "label": "Bakersfield Central",
                "value": "880000"
            },
            {
                "label": "Garden Groove harbour",
                "value": "730000"
            },
            {
                "label": "Los Angeles Topanga",
                "value": "590000"
            },
            {
                "label": "Compton-Rancho Dom",
                "value": "520000"
            },
            {
                "label": "Daly City Serramonte",
                "value": "330000"
            }
        ]
    }

    dayGraphDataSource = {
        "chart": {
            "caption": "Day Graph",
            // "subCaption": "Top 5 stores in last month by revenue",
            // "numberprefix": "$",
            "theme": "fint"
        },
        "data": [
            {
                "index":0,
                "label": "Sun",
                "value": "0"
            },
            {
                "index":1,
                "label": "Mon",
                "value": "0"
            },
            {
                "index":2,
                "label": "Tue",
                "value": "0"
            },
            {
                "index":3,
                "label": "Wed",
                "value": "0"
            },
            {
                "index":4,
                "label": "Thu",
                "value": "0"
            },
            {
                "index":5,
                "label": "Fri",
                "value": "0"
            },
            {
                "index":6,
                "label": "Sat",
                "value": "0"
            },
           
        ]
    }

    weekGraphDataSource = {
        "chart": {
            "caption": "Week Graph",
            // "subCaption": "Top 5 stores in last month by revenue",
            // "numberprefix": "$",
            "theme": "fint"
        },
        "data": [
            {
                "index":0,
                "label": "Week1",
                "value": "0"
            },
            {
                "index":1,
                "label": "Week2",
                "value": "0"
            },
            {
                "index":2,
                "label": "Week3",
                "value": "0"
            },
            {
                "index":3,
                "label": "Week4",
                "value": "0"
            },
            {
                "index":4,
                "label": "Week5",
                "value": "0"
            }
           
        ]
    }

    monthGraphDataSource = {
        "chart": {
            "caption": "Month Graph",
            // "subCaption": "Top 5 stores in last month by revenue",
            // "numberprefix": "$",
            "theme": "fint"
        },
        "data": [
            {
                "index":0,
                "label": "1",
                "value": "0"
            },
            {
                "index":1,
                "label": "2",
                "value": "0"
            },
            {
                "index":2,
                "label": "3",
                "value": "0"
            },
            {
                "index":3,
                "label": "4",
                "value": "0"
            },
           
            {
                "index":3,
                "label": "4",
                "value": "0"
            },

            {
                "index":4,
                "label": "5",
                "value": "0"
            },
            {
                "index":5,
                "label": "6",
                "value": "0"
            },
            {
                "index":6,
                "label": "7",
                "value": "0"
            },
            {
                "index":7,
                "label": "8",
                "value": "0"
            },
            {
                "index":8,
                "label": "9",
                "value": "0"
            },
            {
                "index":9,
                "label": "10",
                "value": "0"
            },
            {
                "index":10,
                "label": "11",
                "value": "0"
            },
            {
                "index":11,
                "label": "12",
                "value": "0"
            },

        ]
    }
    constructor(private activeworkoutService: ActiveworkoutService) {

    }

    ngOnInit() {
        this.getAllActiveWorkout();
    }

    getAllActiveWorkout() {
        this.activeworkoutService.getAllActiveWorkouts().subscribe(
            data => {
                this.activeworkouts = data;
            },
            error => {

            },
            () => {
                this.getCurrentDayWorkoutTime();
                this.getWeeklyWorkoutTime();
                this.getMonthlyWorkoutTime();
                //this.getWeeklySplitWorkoutTime();
            }
        );
    }
    
    getCurrentDayWorkoutTime() {
        this.activeworkouts.forEach(element => {
            if (element.start_date.toString() === this.transformDate(Date.now())) {                
                var workoutinMin =this.getMinsOfSingleWorkout(element);
                this.totalWorkoutToday = this.totalWorkoutToday+workoutinMin;
            }
           
        });


    }
    getWeeklyWorkoutTime(){
       //alert(this.getMonday(Date.now()));
        this.activeworkouts.forEach(element => {
            if (element.start_date.toString() >= this.transformDate(this.getMonday(Date.now()))) {                
                var workoutinMin =this.getMinsOfSingleWorkout(element);
                var calBurn = workoutinMin*element.workout.cbpm;
                this.totalWorkoutThisWeek = this.totalWorkoutThisWeek+workoutinMin;
                this.weekCalBurn = this.weekCalBurn+calBurn;
                var dt =new Date(element.start_date);
                var day = dt.getDay()+ (day == 0 ? -6 : 1) -1;
                this.dayGraphDataSource.data.forEach(graphElement => {
                    if(graphElement.index===day){
                        graphElement.value = graphElement.value+ workoutinMin*element.workout.cbpm
                    }
                });
            }
          
        });

    }

    getMonthlyWorkoutTime(){
        //alert(this.getMonday(Date.now()));
         this.activeworkouts.forEach(element => {
             if (element.start_date.toString() >= this.transformDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1))) {                
                 var workoutinMin =this.getMinsOfSingleWorkout(element);
                 var calBurn = workoutinMin*element.workout.cbpm;
                 this.totalWorkoutThisMonth = this.totalWorkoutThisMonth+workoutinMin;
                 this.yearCalBurn = this.yearCalBurn+calBurn;
             }
             this.getMonthlysplit(element);
             if (element.start_date.toString() >= this.transformDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1))) {  
             this.getWeeklysplit(element);
             }
         });
         
     }

     getWeeklysplit(element){
        //alert(this.getMonday(Date.now()));
        var workoutinMin =this.getMinsOfSingleWorkout(element);
        var calBurn = workoutinMin*element.workout.cbpm;
        this.monthCalBurn = this.monthCalBurn+calBurn;
        var dt =new Date(element.start_date);
        var date=dt.getDate();
        var week = Math.round(date/7)-1;
        this.weekGraphDataSource.data.forEach(graphElement => {
            if(graphElement.index===week){
                graphElement.value = graphElement.value+ workoutinMin*element.workout.cbpm
            }
        });
     }

     getMonthlysplit(element){
        var workoutinMin =this.getMinsOfSingleWorkout(element);
        var dt =new Date(element.start_date);
        var mon=dt.getMonth();
        this.monthGraphDataSource.data.forEach(graphElement => {
            if(graphElement.index===mon){
                graphElement.value = graphElement.value+ workoutinMin*element.workout.cbpm
            }
        });

     }

   

    transformDate(now) {
     const myFormattedDate = this.pipe.transform(now, 'yyyy-MM-dd');
    //  const  myFormattedDate ="2018-05-23";
        return myFormattedDate;
    }


    getMinsOfSingleWorkout(element){
        //Get the minutes of each workout....
        var actStartTime= Date.parse(element.start_date+'T'+element.start_time);
        var actEndTime= Date.parse(element.end_date+'T'+element.end_time);
        var minsWorkout =Math.ceil((Math.abs(actEndTime - actStartTime))/(1000*60));
        return minsWorkout;
        
    }
    
    getMonday(d) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1);
        return new Date(d.setDate(diff));
      }

}
