import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import {EventsService} from '../services/events.service';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(private events:EventsService) { }

  ngOnInit(): void {

  }
onSubmit(form:NgForm){

}
}
