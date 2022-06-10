import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-sign-out-page',
  templateUrl: './user-sign-out-page.component.html',
  styleUrls: ['./user-sign-out-page.component.scss']
})
export class UserSignOutPageComponent implements OnInit {

  isLogoutFinished = false;
  constructor(
    private userSevice: UserService
  ) { }

  ngOnInit(): void {
    this.isLogoutFinished = this.userSevice.signOut();
  }

}
