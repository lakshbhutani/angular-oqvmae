import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: any = {};
  userList: Array<any> = [
    {firstName: 'laksh', lastName: 'bhutani', email: 'lakshbhutani@gmail.com' },
    {firstName: 'aastha', lastName: 'bajaj', email: 'aasthabajaj@gmail.com' },
  ];
  // @ViewChild('f') userForm: any;
  // @ViewChild('f', {static: false}) userForm: any
  isEditTrue: boolean = false;
  index;

  onSubmit(f) {
    this.userList.push(this.model)
    this.model = { firstName: '', lastName: '', email: ''}
  }

  onUpdate() {
    this.userList[this.index] = this.model;
    this.model = { firstName: '', lastName: '', email: ''}
    this.isEditTrue = false;
  }

  onUserEdit(editUser, index) {
    this.isEditTrue = true;
    // const item = Object.create(editUser);
    this.model = editUser;
    this.index = index;
  }

  onUserDelete(index) {
    this.userList.splice(index, 1)
  }
}
