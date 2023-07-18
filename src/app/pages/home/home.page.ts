import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { FormsModule       } from '@angular/forms';
import { IonicModule       } from '@ionic/angular';

// Sections
import { MainComponent  } from 'src/app/sections/main/main.component';
import { FieldComponent } from 'src/app/sections/field/field.component';

// Components
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';



@Component({
  	selector:    'app-home',
  	templateUrl: './home.page.html',
  	styleUrls:   ['./home.page.scss'],
  	standalone:  true,
  	imports:     [
		IonicModule,
		CommonModule,
		FormsModule,
		NavbarComponent,
		MainComponent,
		FieldComponent
	]
})



export class HomePage implements OnInit {


	constructor() { }


	ngOnInit() {
	}


}
