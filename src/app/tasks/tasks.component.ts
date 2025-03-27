import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, ButtonComponent, MatIconModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks = Array;
}
