import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    let color: string = ""
    switch(value){
      case "active": {
        color = "green";
        break;}
      case "inactive":{
        color = "#FFC300";
         break;}
      case "banned": {
        color = "red";
         break;}
      default: {
        color = "black";
         break;}
    }
    return color;
  }

}
