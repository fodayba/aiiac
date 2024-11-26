import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const staggerFadeIn = trigger('staggerFadeIn', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('100ms', [
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('300ms ease-out', style({ height: '*', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ height: 0, opacity: 0 }))
  ])
]); 