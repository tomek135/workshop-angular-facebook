import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  checkIsLogged() : boolean {
    return this.userService.isLogged;
  }
}
