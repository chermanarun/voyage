import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.scss'],
})
export class StateDetailsComponent implements OnInit {

  constructor(public router: Router) { }
  gotopage() {
    this.router.navigateByUrl('/temple/1');
  }

  ngOnInit() { }

}
