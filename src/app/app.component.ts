import { Component ,OnInit} from '@angular/core';
import {EventsService} from './services/events.service'
import {Event} from './models/event';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  eventsList : Event[];
  state:string;
 
constructor(private events:EventsService){

}  
AddEvent(){
  this.events.state="add";
}
ondeleteEvent(indice:number){
this.events.deletEvent(indice);
}
ngOnInit(){
  this.events.initEvents();
  this.eventsList = this.events.getEvents();

}

}
