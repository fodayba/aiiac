import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  
  // Replace this with your actual admin check logic
  const isAdmin = false; // For now, always deny access
  
  if (!isAdmin) {
    router.navigate(['/']);
    return false;
  }
  
  return true;
}; 