import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="flex items-center justify-center" [ngClass]="containerClass">
      <div class="relative">
        <div class="w-12 h-12 rounded-full absolute
                    border-4 border-solid border-gray-200"></div>
        <div class="w-12 h-12 rounded-full animate-spin absolute
                    border-4 border-solid border-blue-500 border-t-transparent"></div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() containerClass = 'h-64';
} 