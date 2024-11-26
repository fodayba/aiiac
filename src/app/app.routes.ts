import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceDetailComponent } from './pages/services/service-detail/service-detail.component';
import { ProjectCategoryComponent } from './pages/projects/project-category/project-category.component';

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
  { 
    path: 'services', 
    component: ServicesComponent 
  },
  { 
    path: 'services/:id', 
    component: ServiceDetailComponent 
  },
  { 
    path: 'projects', 
    component: ProjectsComponent 
  },
  { 
    path: 'projects/:category', 
    component: ProjectCategoryComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  }
];
