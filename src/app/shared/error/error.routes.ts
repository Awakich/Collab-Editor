import { Routes } from "@angular/router";
import { ErrorComponent } from "./error.component";
import { ErrorNotFoundComponent } from "./not-found/not-found.component";

export const ERROR_ROUTES: Routes = [
  {
    path: "",
    component: ErrorComponent,
    children: [
      {
        path: "404",
        component: ErrorNotFoundComponent,
      },
    ],
  },
];