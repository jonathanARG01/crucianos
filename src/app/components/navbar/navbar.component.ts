import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { IonicModule       } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@Component({
  	selector:    'app-navbar',
  	templateUrl: './navbar.component.html',
  	styleUrls:   ['./navbar.component.scss'],
	standalone:  true,
	imports:     [IonicModule, CommonModule, RouterModule]
})



export class NavbarComponent  implements OnInit {


	constructor() { }


	ngOnInit() {}


}

