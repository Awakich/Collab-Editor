import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() color: "primary" | "grey" = "primary";
  @Input() type: "submit" | "reset" | "button" = "button";
  @Input() appearance: "inline" | "outline" = "inline";
  @Input() backgroundColor?: string;
  @Input() disabled = false;
  @Input() customTypographyClass?: string;
}
