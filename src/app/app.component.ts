import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import _ from 'lodash';
import moment from 'moment';

import { ButtonModule } from 'primeng/button';
import { faCircleUser, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  faCircleUser = faCircleUser;
  faHouse = faHouse;

	users = [
		{ 'user': 'barney',  'age': 36, 'active': true },
		{ 'user': 'fred',    'age': 40, 'active': false },
		{ 'user': 'pebbles', 'age': 1,  'active': true }
	];

  ngOnInit() {
    console.log('On Init');
    const activeUsers = _.filter(this.users, ['active', true]);
    console.log(activeUsers);
	  console.log('moment test: ' + moment(new Date()).format("YYYY-MM-DD"));
  }
}
