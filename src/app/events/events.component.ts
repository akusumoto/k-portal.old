import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:any;
  raw:string;

  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.events = [];
    this.fs.collection('events')
      .valueChanges()
      .subscribe((events) => {
        if(events != null){
          this.events = events;
          this.raw = JSON.stringify(events);
        }
      },
      error => {
        this.events = null;
      })

  }

}
