import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SKILLS_ROUTES } from './skills/skills.routes';
import { TASKS_ROUTES } from './tasks/tasks.routes';

export const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "skills",
    loadChildren: () => import("./skills/skills.routes").then(c => SKILLS_ROUTES),
  },
  {
    path: "tasks",
    loadChildren: () => import("./tasks/tasks.routes").then(c => TASKS_ROUTES),
  },
  {
    path: "error",
    loadChildren: () => import("./shared/error/error.routes").then(c => c.ERROR_ROUTES),
  },
  {
    path: "**",
    redirectTo: "error/404",
  },
];
