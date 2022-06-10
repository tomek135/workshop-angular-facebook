import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserData } from '../../interfaces/user-data.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-sign-up-page',
  templateUrl: './user-sign-up-page.component.html',
  styleUrls: ['./user-sign-up-page.component.scss']
})
export class UserSignUpPageComponent implements OnInit {

  isRegistrationFinished= false;

  registrationForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    passwordConfirmation: new FormControl(),
    person: new FormGroup({
      name: new FormControl(),
      surname: new FormControl()
    })
  });

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSumbit(){
    const form = this.registrationForm.getRawValue();
    const status = this.userService.addUser({
      email: form.email,
      password: form.password,
      name: form.person.name,
      surename: form.person.surname
    });

    if(status){
      this.isRegistrationFinished = true;
    }

  }


}
