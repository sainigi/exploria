import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-ex-home',
  templateUrl: './ex-home.component.html',
  styleUrls: ['./ex-home.component.scss']
})
export class ExHomeComponent {

  constructor(private matIconRegistry:MatIconRegistry,
    private domSanitzer:DomSanitizer){
      this.matIconRegistry.addSvgIcon(
        'globe',
        this.domSanitzer.bypassSecurityTrustResourceUrl('../../assets/icons/globe.svg')
      );
    
    }
}
