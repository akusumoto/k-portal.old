import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[] = [];

  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.fs.collection<Project>('projects')
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
