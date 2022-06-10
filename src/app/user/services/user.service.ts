import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces/credentials.interface';
import { UserData } from '../interfaces/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged = false;
  constructor() { }


  signIn(credentials: Credentials): boolean{
    console.debug('User is logged', credentials.email);
    this.isLogged = true;
    return true;
  }

  addUser(user: UserData): boolean{
    console.debug('Add user', user.email);
    return true;
  }
}
