import { Pipe, PipeTransform } from '@angular/core';
import {} from '../category';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {        
		if(!items) return [];
		if(!searchText) return items;	
		searchText = searchText.toLowerCase();	
     
		return items.filter( it => {
			console.log(it.categoryName);
			return it.categoryName.toLowerCase().includes(searchText);
		});   
    }
}
