import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SkillComponent } from './shared/skill/skill.component';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, OnDestroy {
  skills = Array;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
