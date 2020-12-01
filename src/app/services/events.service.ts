import { Injectable } from '@angular/core';
import{Event} from '../models/event';
@Injectable()
export class EventsService {
eventsList:Event[];
state:string;
  constructor() { }


  initEvents(){
    this.eventsList =[
      new Event(
        "Formation flutter",
        "Orange",
        "Formation",
      new Date("25-11-2020"),
      new Date("27-11-2020")
      ),
      new Event(
        "IA",
        "hhhgh",
        "Formation",
        new Date("25-11-2020"),
        new Date("27-11-2020")
      ),
    ];
    this.state="";
  }

getEvents(): Event[]{
return (this.eventsList);
}

getEvent(indice:number):Event{
  return (this.eventsList[indice]);
}

addEvent(event:Event){
this.eventsList.push(event);
this.state=""; 

}

UpdateEvent(indice:number, event:Event){
  this.eventsList[indice]=event;
  this.state=""; 
}
deletEvent(indice:number){
  this.eventsList.splice(indice,1);
}

}
