import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from './../services/user.service';


@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.userService.isLoggedIn()) {
        // logged in so return true
        return true;
      }

      // not logged in so redirect to login page
      this.router.navigate(['/login']);
      return false;
   
  }

}
