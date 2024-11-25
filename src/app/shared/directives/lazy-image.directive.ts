import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]'
})
export class LazyImageDirective {
  @HostBinding('class') className = 'opacity-0 transition-opacity duration-300';
  @Input() src!: string;

  constructor(private el: ElementRef) {
    const img = this.el.nativeElement;
    img.onload = () => {
      this.className = 'opacity-100 transition-opacity duration-300';
    };
  }
} 