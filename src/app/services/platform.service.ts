import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getWindow(): Window | null {
    return this.isBrowser() ? window : null;
  }

  getNavigator(): Navigator | null {
    return this.isBrowser() ? navigator : null;
  }

  getDocument(): Document | null {
    return this.isBrowser() ? document : null;
  }
} 