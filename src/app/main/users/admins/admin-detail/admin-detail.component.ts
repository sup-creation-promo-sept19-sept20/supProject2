import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminsService} from '../admins.service';
import {map, switchMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {Admin} from '../../../../models/admin.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss']
})
export class AdminDetailComponent implements OnInit, OnDestroy {

  adminForm: FormGroup;
  admin: Admin;
  private routeSub: Subscription;
  private adminId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminsService: AdminsService,
    private fb: FormBuilder,
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.routeSub = this.route.params
      .pipe(
        map(params => params.id),
        map(id => this.adminId = id),
        switchMap(id => this.adminsService.getAdminById$(id)),
        map(admin => this.admin = admin),
        map(() => this.initForm(this.admin))
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  initForm(admin: Admin = new Admin) {
    this.adminForm = this.fb.group({
      firstName: [admin.firstName, Validators.required],
      lastName: [admin.lastName, Validators.required],
      city: [admin.city, Validators.required],
      isAdmin: [admin.isAdmin]
    });
  }

  update(value) {
    this.adminsService.setAdminByid(this.adminId, value);
  }

  cancel() {
    this.router.navigate(['/users/admins/list']);
  }

}
