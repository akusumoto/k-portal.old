import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any;

  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.projects = [];
    this.fs.collection('projects')
      .valueChanges()
      .subscribe((projects) => {
        if(projects != null){
          this.projects = projects;
        }
      },
      error => {
        this.projects = null;
      })

  }

}
