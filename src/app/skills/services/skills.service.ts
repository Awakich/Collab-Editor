import { Injectable } from "@angular/core";
import { collectionData, docData } from "@angular/fire/firestore";
import { collection, doc, Firestore } from "firebase/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { Skill, SkillDetail } from "src/models/skill.model";

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private firestore: Firestore) { }

  skills$ = new BehaviorSubject([]);
  skills = this.skills$.asObservable();

  skillDetail$ = new BehaviorSubject<SkillDetail | null>(null);
  skillDetail = this.skillDetail$.asObservable();

  getSkills(): Observable<Skill[]> {
    const skillsRef = collection(this.firestore, 'skills');
    collectionData(skillsRef, { idField: 'id' }).subscribe({
      next: (res: any) => {
        this.skills$.next(res);
      },
      error: () => {
        this.skills$.next([]);
      }
    })
    return this.skills;
  }

  getDetailSkill(id: string): Observable<SkillDetail | null> {
    const skillDocRef = doc(this.firestore, `skill-detail/${id}`);
    docData(skillDocRef, { idField: 'id' }).subscribe({
      next: (res: any) => {
        this.skillDetail$.next(res);
      },
      error: () => {
        this.skillDetail$.next(null);
      }
    });
    return this.skillDetail;
  }

  // addSkill(project: any) {
  //   const projectsRef = collection(this.firestore, 'skills');
  //   return addDoc(projectsRef, project);
  // }
}
