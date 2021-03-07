import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event:any;

  constructor(private route: ActivatedRoute,
              private fs:AngularFirestore) { }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.fs.collection('events')
      .doc(id)
      .valueChanges()
      .subscribe((value) => {
        if(value != null){
          this.event = value;
        }
      });
  }

}
