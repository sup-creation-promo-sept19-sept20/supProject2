import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class ErrorsManagerService {

  constructor(public snackBar: MatSnackBar) {
  }

  manageErrors(obs) {
    return obs.pipe(
      catchError((err) => {
        console.error(err);
        this.snackBar.open(err.message, '', {
          duration: 5000,
        });
        return of(null);
      }),
    );
  }
}
