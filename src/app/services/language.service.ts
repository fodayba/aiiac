import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private defaultLocale = 'en';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  detectLocale(): string {
    if (isPlatformBrowser(this.platformId)) {
      // Browser-side detection
      return (
        navigator.language ||
        (navigator as any).browserLanguage ||
        this.defaultLocale
      ).split('-')[0];
    }
    // Server-side default
    return this.defaultLocale;
  }
} 