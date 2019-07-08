import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../auth/user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlreadyConnectedGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isConnected()
      .pipe(
        map(isConnected => {
          if (!isConnected) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        })
      );
  }
}
