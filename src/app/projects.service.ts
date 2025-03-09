import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  constructor(private firestore: Firestore) { }

  projects$ = new BehaviorSubject([]);
  projects = this.projects$.asObservable();

  getProjects(): Observable<any[]> {
    const projectsRef = collection(this.firestore, 'skills');
    collectionData(projectsRef, { idField: 'id' }).subscribe((res: any) => {
      this.projects$.next(res);
    });
    return this.projects;
  }

  addProject(project: any) {
    const projectsRef = collection(this.firestore, 'skills');
    return addDoc(projectsRef, project);
  }
}
