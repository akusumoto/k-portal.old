import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events$ = this.eventService.getEvents().pipe(tap((data) => console.log(data)));
  raw:string;

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
  }

}
