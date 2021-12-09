import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    switch (state.url) {
      case '/register':
        if (localStorage.getItem('apiKey')) {
          this.router.navigate(['/addTemplate']);
          return false;
        }
        return true;
      default:
        if (!localStorage.getItem('apiKey')) {
          this.router.navigate(['/register']);
          return false;
        }
        return true;
    }
  }
}
