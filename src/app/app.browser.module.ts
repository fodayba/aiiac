import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'aiiac-website' })
  ],
  providers: [
    {
      provide: 'WINDOW',
      useFactory: () => window
    }
  ]
})
export class AppBrowserModule { } 