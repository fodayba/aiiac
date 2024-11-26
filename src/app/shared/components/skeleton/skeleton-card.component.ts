import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-card',
  standalone: true,
  template: `
    <div class="animate-pulse">
      <div class="h-48 bg-gray-200 rounded-t-lg"></div>
      <div class="p-4 space-y-3">
        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        <div class="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  `
})
export class SkeletonCardComponent {} 