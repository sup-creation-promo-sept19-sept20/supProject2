import {Component, OnInit, ViewChild} from '@angular/core';
import {Admin} from '../../../../models/admin.model';
import {AdminsService} from '../admins.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.scss']
})
export class AdminsListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'city', 'isAdmin', 'go', 'more'];
  admins: Admin[];
  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private adminsService: AdminsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.adminsService.getAllAdmins()
      .subscribe((admins: Admin[]) => {
        this.admins = admins;
        this.initTable();
      });
  }

  initTable() {
    this.dataSource = new MatTableDataSource(this.admins);
    this.dataSource.sort = this.sort;
  }

  delete(user) {
  }

  goToUser(user) {
    this.router.navigate(['/users/admins/detail/', user.id]);
  }

}
