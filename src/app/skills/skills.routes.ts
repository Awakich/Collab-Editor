import { Routes } from "@angular/router";
import { SkillsComponent } from "./skills.component";
import { SkillDetailComponent } from "./skill-detail/skill-detail.component";

export const SKILLS_ROUTES: Routes = [
  {
    path: "",
    component: SkillsComponent,
  },
  {
    path: ":skillId",
    component: SkillDetailComponent,
  }
]
