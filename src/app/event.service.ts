import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private afs:AngularFirestore) { }

  getEvents() {
    return this.afs.collection<Event>('events').valueChanges();
  }

  createEvent(uid:string, name:string, date:Date, place:string, station:string, detail:string) {
    const id = this.afs.createId();
    const params: Event = {
      id,
      uid,
      name,
      date,
      place,
      station,
      detail,
    };
    this.afs.collection<Event>('events').doc(id).set(params);
  }

  updateEvent(event: Event){
    this.afs.collection<Event>('events').doc(event.id).set(event);
  }

  deleteEvent(id: string){
    this.afs.collection<Event>('events').doc(id).delete();
  }
}
