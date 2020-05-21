import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'originFilter'
})
export class OriginFilterPipe implements PipeTransform {

  transform(value: any, sOrigin: string, sDestination: string): any {
    if (value && value.length){
      return value.filter(item =>{
          if (sOrigin && item.origin.toLowerCase().indexOf(sOrigin.toLowerCase()) === -1){
              return false;
          }
          if (sDestination && item.destination.toLowerCase().indexOf(sDestination.toLowerCase()) === -1){
              return false;
          }
          return true;
     })
  }
  else{
      return value;
  }
  }
}
