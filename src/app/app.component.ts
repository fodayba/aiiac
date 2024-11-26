import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <app-header></app-header>
    <main [@fadeAnimation]="o.isActivated ? o.activatedRoute : ''" class="min-h-screen pt-16">
      <router-outlet #o="outlet"></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0.8 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'aiiac-website';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
