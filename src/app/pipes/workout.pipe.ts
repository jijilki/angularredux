import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workoutPipe'
})
export class WorkoutPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    console.log("hi***searchText**********"+searchText);
       
   if(!items) return [];
   if(!searchText) return items;
 
   searchText = searchText.toLowerCase();
 
       // filter items array, items which match and return true will be
       // kept, false will be filtered out
   
   return items.filter( it => {
     console.log(it.workout_title);
     return it.workout_title.toLowerCase().includes(searchText);
   });   
  
       //return items.filter(item => item.categoryName.indexOf(searchText) !== -1);
   }

}
