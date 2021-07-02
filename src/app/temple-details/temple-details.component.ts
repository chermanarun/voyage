import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temple-details',
  templateUrl: './temple-details.component.html',
  styleUrls: ['./temple-details.component.scss'],
})
export class TempleDetailsComponent implements OnInit {
  constructor(public router: Router) { }
  gotopage() {
    this.router.navigateByUrl('/gallery/1');
  }

  ngOnInit() {}

}
