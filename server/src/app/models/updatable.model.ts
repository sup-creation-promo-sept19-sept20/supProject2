import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class Updatable<T> {
  id: string;

  constructor(
    public root: string,
    public afs: AngularFirestore,
  ) {
  }

  update(data): Promise<Updatable<T>> {
    console.log(data);
    Object.assign(this, data);
    return this.afs.doc(`${this.root}/${this.id}`).set(this._getRaw()).then(() => this);
  }

  fill(): Observable<T> {
    return (this.afs.doc(`${this.root}/${this.id}`).valueChanges() as Observable<T>)
      .pipe(
        map(data => Object.assign(this, data)),
        map(() => this._getRaw())
      );
  }

  getWatcher(): Observable<T> {
    return this.afs.doc(`${this.root}/${this.id}`).valueChanges() as Observable<T>;
  }

  private _getRaw(): T {
    const copy = new Map(Object.entries(this));
    const temp = {};
    copy.forEach((value, key) => {
      if (key !== 'afs' && value !== undefined) {
        temp[key] = value;
      }
    });
    return temp as T;
  }
}
