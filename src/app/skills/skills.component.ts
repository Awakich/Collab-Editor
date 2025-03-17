import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TagComponent } from '../shared/tag/tag.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TagComponent, ButtonComponent],
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
