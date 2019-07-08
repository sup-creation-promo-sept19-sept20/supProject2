import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Admin} from '../../../models/admin.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class AdminsService {
  constructor(
    private afs: AngularFirestore,
  ) {
  }

  getAdminById$(id: string): Observable<Admin> {
    return this.afs.doc('users/' + id).valueChanges() as Observable<Admin>;
  }

  setAdminByid(id: string, data): Promise<void> {
    return this.afs.doc('users/' + id).update(data);
  }

  getAllAdmins(): Observable<Admin[]> {
    return this.afs.collection('users').valueChanges() as Observable<Admin[]>;
  }
}
