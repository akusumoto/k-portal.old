import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from 'src/app/project';
import { ProjectService } from '../project.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$ = this.projectService.getProjects().pipe(tap((data) => console.log(data)));

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {  
  }

}
