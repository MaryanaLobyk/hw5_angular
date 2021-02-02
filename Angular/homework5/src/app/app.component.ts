import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  users = [];

  name = new FormControl('');
  age = new FormControl();

  myForm = new FormGroup({
    name: this.name,
    age: this.age

  });

  push(): void {
    this.users.push(this.myForm.value);
    console.log(this.users);
  }


}

