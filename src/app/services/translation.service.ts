import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<Language>(this.detectLocale());
  private translations: { [key: string]: any } = {};

  constructor(private http: HttpClient) {
    this.loadTranslations(this.currentLang.value);
  }

  private detectLocale(): Language {
    const locale = navigator.language.toLowerCase();
    const frenchLocales = ['fr', 'fr-fr', 'fr-ca', 'fr-be', 'fr-ch', 'fr-lu'];
    return frenchLocales.some(l => locale.startsWith(l)) ? 'fr' : 'en';
  }

  getCurrentLang(): Observable<Language> {
    return this.currentLang.asObservable();
  }

  private loadTranslations(lang: Language) {
    this.http.get(`/assets/i18n/${lang}.json`).subscribe(
      (data: any) => {
        this.translations = data;
      }
    );
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }
} 