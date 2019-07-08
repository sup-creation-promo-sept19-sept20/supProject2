import {Injectable} from '@angular/core';
import {from, of, throwError} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
  ) {
  }

  getAuthState() {
    return this.afAuth.authState
      .pipe(
        map((user: User) => this.userService.setUserState(user)),
        map((user: User) => !!user)
      );
  }

  watchFirebaseConnectionState() {
    this.afAuth.authState.subscribe((user: User) => {
      if (user) {
        this.userService.connect(user);
      } else {
        this.userService.disconnect();
      }
    });
  }

  init() {
    this.userService.get$()
      .pipe(
        map(user => {
          if (!user.isConnected) {
            this.router.navigate(['/connect']);
          }
        })
      )
      .subscribe()
    ;
  }

  loginWithEmailAndPassword(login: string, password: string) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(login, password))
      .pipe(
        switchMap((userCredential: UserCredential) => {
          return this.userService.connect(userCredential.user);
        }),
        tap(value => {
          if (value) {
            return this.router.navigate(['/']);
          }
        }),
        catchError((err) => {
          return of(throwError(err));
        })
      );
  }

  logout() {
    return from(this.afAuth.auth.signOut()).subscribe();
  }

}
