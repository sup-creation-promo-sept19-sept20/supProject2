import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-profile-access',
  templateUrl: './profile-access.component.html',
  styleUrls: ['./profile-access.component.scss']
})
export class ProfileAccessComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithEmailAndPassword('', '');
  }

  logout() {
    this.authService.logout();
  }

}
