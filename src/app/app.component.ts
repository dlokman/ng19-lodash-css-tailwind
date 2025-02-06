import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	users = [
		{ 'user': 'barney',  'age': 36, 'active': true },
		{ 'user': 'fred',    'age': 40, 'active': false },
		{ 'user': 'pebbles', 'age': 1,  'active': true }
	];

  ngOnInit() {
    console.log('On Init');
    let activeUsers = _.filter(this.users, ['active', true]);
    console.log(activeUsers);
  }
}
