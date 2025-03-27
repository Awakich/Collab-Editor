import { inject } from "@angular/core"
import { SkillsService } from "../services/skills.service"
import { ActivatedRouteSnapshot } from "@angular/router";

export const SkillDetailResolver = (route: ActivatedRouteSnapshot) => {
  const skillsService = inject(SkillsService);
  const skillId = route.params["skillId"];

  return skillsService.getDetailSkill(skillId);
}
