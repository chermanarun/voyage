import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temple-gallery-view',
  templateUrl: './temple-gallery-view.component.html',
  styleUrls: ['./temple-gallery-view.component.scss'],
})
export class TempleGalleryViewComponent implements OnInit {

  constructor(public router: Router) { }
  gotopage() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {}

}
