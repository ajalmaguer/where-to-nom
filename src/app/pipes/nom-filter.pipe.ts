import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomFilter',
  pure: false
})
export class NomFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let output: any[] = value

    return (output.filter((restaurant) => {
    	return restaurant.list == args
    }) )

  }

}
