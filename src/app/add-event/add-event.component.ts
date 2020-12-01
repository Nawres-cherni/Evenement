import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import {Event} from '../models/event';
import {EventsService} from '../services/events.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private events:EventsService) { }

  addEvent(f:NgForm){

    var event=new Event(
      f.value.title,
      f.value.organisateur,
      f.value.description,
      new Date(f.value.dateBegin),
      new Date(f.value.dateEnd),
     
    )
this.events.addEvent(event);
}

  ngOnInit(): void {
  }

}
