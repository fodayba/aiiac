import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-touch-slider',
  template: `
    <div #slider 
         class="overflow-hidden touch-pan-x"
         (touchstart)="onTouchStart($event)"
         (touchmove)="onTouchMove($event)"
         (touchend)="onTouchEnd()">
      <div class="flex transition-transform duration-300"
           [style.transform]="'translateX(' + position + 'px)'">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class TouchSliderComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  position = 0;
  startX = 0;
  currentX = 0;
  isDragging = false;

  ngAfterViewInit() {
    // Initialize touch handling
  }

  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.startX = event.touches[0].pageX - this.position;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    this.currentX = event.touches[0].pageX - this.startX;
    this.position = this.currentX;
    
    // Add resistance at edges
    if (this.position > 0) {
      this.position = this.position * 0.3;
    } else if (this.position < this.getMaxScroll()) {
      const overScroll = this.position - this.getMaxScroll();
      this.position = this.getMaxScroll() + overScroll * 0.3;
    }
  }

  onTouchEnd() {
    this.isDragging = false;
    // Snap to nearest item
    this.snapToNearest();
  }

  private getMaxScroll(): number {
    const slider = this.slider.nativeElement;
    return -(slider.scrollWidth - slider.clientWidth);
  }

  private snapToNearest() {
    // Add snapping logic
  }
} 