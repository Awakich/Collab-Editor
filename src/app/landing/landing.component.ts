import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../shared/button/button.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, RouterLink, ButtonComponent, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
