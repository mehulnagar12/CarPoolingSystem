import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmail'
})
export class FilterEmailPipe implements PipeTransform {

  transform(value: any, sEmail: string): any {
    if(sEmail==""){
      return value;
    }

    const userArray:any[]=[];
    for(let i=0;i<value.length;i++){
      let emailId:string=value[i].email;
      console.log(emailId);
      if(emailId.startsWith(sEmail)){
        userArray.push(value[i]);
      } 
    }
    return userArray
  }
}
