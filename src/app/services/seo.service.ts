import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PlatformService } from './platform.service';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  constructor(
    private meta: Meta,
    private titleService: Title,
    private platformService: PlatformService
  ) {}

  updateMetaTags(config: SEOConfig) {
    if (!this.platformService.isBrowser()) {
      return; // Skip meta updates during SSR
    }

    // Set basic meta tags
    this.titleService.setTitle(`${config.title} | AIIAC`);
    this.meta.updateTag({ name: 'description', content: config.description });
    
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords.join(', ') });
    }

    // Set Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.ogType || 'website' });
    this.meta.updateTag({ property: 'og:image', content: config.ogImage || '/assets/images/og-default.jpg' });
    
    // Set Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
  }
} 