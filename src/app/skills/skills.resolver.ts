import { inject } from "@angular/core";
import { SkillsService } from "./services/skills.service";

export const SkillsResoolver = () => {
  const skillsService = inject(SkillsService);

  return skillsService.getSkills();
};
