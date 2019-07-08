import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {UserModel} from '../models/user.model';
import {filter, map, tap} from 'rxjs/operators';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserModel = new UserModel();
  private user$: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);

  constructor() {
  }

  private updateUserStream() {
    this.user$.next(this.user);
  }

  setUserState(user: User): User {
    if (user) {
      this.connect(user);
    } else {
      this.disconnect();
    }
    return user;
  }

  connect(userCredentials: User): Observable<boolean> {
    this.user = new UserModel(
      userCredentials.displayName,
      userCredentials.displayName,
      '',
      false,
      true
    );
    this.updateUserStream();
    return of(true);
  }

  isConnected(): Observable<boolean> {
    return this.get$()
      .pipe(
        map(user => user.isConnected),
      );
  }

  disconnect() {
    this.user = new UserModel();
    this.updateUserStream();
  }

  get$(): Observable<UserModel> {
    return this.user$
      .pipe(
        filter(user => !!user)
      );
  }
}
