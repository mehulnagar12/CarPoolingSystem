import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, sOrigin: string, sDestination: string, sDate: Date): any {
    if (value && value.length) {
      return value.filter(item => {
        if (sOrigin && item.origin.toLowerCase().indexOf(sOrigin.toLowerCase()) === -1) {
          return false;
        }
        if (sDestination && item.destination.toLowerCase().indexOf(sDestination.toLowerCase()) === -1) {
          return false;
        }
        if (sDate && item.date.toLowerCase().indexOf(sDate) === -1) {
          return false;
        }
        return true;
      })
    }
    else {
      return value;
    }
  }
}
