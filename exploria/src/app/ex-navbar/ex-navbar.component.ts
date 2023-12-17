import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-ex-navbar',
  templateUrl: './ex-navbar.component.html',
  styleUrls: ['./ex-navbar.component.scss']
})
export class ExNavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  opened: boolean;
  toggleMenuItem:boolean =false;
  constructor() { }

  ngOnInit() {
  }

  toggleMe() {
    console.log("item sssss",this.toggleMenuItem);
    this.toggleMenuItem = !this.toggleMenuItem;
  }

}