import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	goals: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private _data: DataService
	){
		this.route.params.subscribe((...args) => {
			console.log(args[0].id);
			console.log(args[1]);
			console.log(args[0]);
		});
	}

	ngOnInit() {
		this._data.goal.subscribe(res => this.goals = res);
	}

	sendMeHome() {
		this.router.navigate(['']);
	}

}
