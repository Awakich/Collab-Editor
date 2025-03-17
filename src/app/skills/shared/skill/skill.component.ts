import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { TagComponent } from 'src/app/shared/tag/tag.component';
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-skill',
  imports: [CommonModule, ButtonComponent, TagComponent, RouterLink],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent implements OnInit {
  @Input() skill!: Skill;

  ngOnInit(): void {
      
  }
}
