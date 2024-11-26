import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceDetailComponent } from './pages/services/service-detail/service-detail.component';
import { ProjectCategoryComponent } from './pages/projects/project-category/project-category.component';
import { CareersComponent } from './pages/careers/careers.component';
import { JobDetailComponent } from './pages/careers/job-detail/job-detail.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component')
      .then(m => m.AboutComponent)
  },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services/:id', component: ServiceDetailComponent },
  { path: 'projects/:category', component: ProjectCategoryComponent },
  {
    path: 'careers',
    canActivate: [adminGuard],
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent)
  },
  {
    path: 'careers/:id',
    canActivate: [adminGuard],
    loadComponent: () => import('./pages/careers/job-detail/job-detail.component').then(m => m.JobDetailComponent)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'disabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      paramsInheritanceStrategy: 'always',
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
