import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cribsFilter'
})
export class CribsFilterPipe implements PipeTransform {

  transform(items: any[], min: number, max: number): any[] {

    if (!items) {
      return [];
    }

    return items.filter(item => item.price >= min && item.price <= max);
    //
    // for ( let crib of cribs ) {
    //
    //   const price = crib.price;
    //   if (price >= min && price <= max) {
    //     filtered.push(crib);
    //   }
    // }

    // return filtered;
  }
}
