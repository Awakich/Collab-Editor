import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from './projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private projectService = inject(ProjectService);
  subscriptions: Subscription[] = [];

  projects = signal<any[]>([])

  ngOnInit(): void {
    const projectsSub$ = this.projectService.getProjects().subscribe(r => {
      this.projects.set(r);
    });
    this.subscriptions.push(projectsSub$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
