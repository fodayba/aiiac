import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: 'LOCALE',
      useValue: 'en' // Default server locale
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
