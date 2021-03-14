import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private afs:AngularFirestore) { }

  getProjects() : Observable<Project[]> {
    return this.afs.collection<Project>('projects').valueChanges();
  }

  createProject(name:string, date:Date, detail:string){
    const id = this.afs.createId();
    const project: Project = {
      id,
      name,
      date,
      detail
    };
    this.afs.collection<Project>('projects').doc(id).set(project);
  }

  updateProject() {
    // TODO
  }

  deleteProject(id:string){
    this.afs.collection<Project>('projects').doc(id).delete();
  }
}
