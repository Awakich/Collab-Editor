import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  selector: 'app-skill-detail',
  imports: [ButtonComponent],
  templateUrl: './skill-detail.component.html',
  styleUrl: './skill-detail.component.scss'
})
export class SkillDetailComponent {
  questions = Array;
}
