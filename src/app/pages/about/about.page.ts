// Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { FormsModule       } from '@angular/forms';
import { IonicModule       } from '@ionic/angular';

// Components
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { PersonComponent } from 'src/app/components/person/person.component';



@Component({
  	selector:    'app-about',
  	templateUrl: './about.page.html',
  	styleUrls:   ['./about.page.scss'],
  	standalone:  true,
  	imports:     [
		IonicModule,
		CommonModule,
		FormsModule,
		NavbarComponent,
		PersonComponent
	]
})



export class AboutPage implements OnInit {


	people: any = [
		{
			name:     'Jonathan',
			lastname: 'Rojas',
			edad:     30,
			charge:   'Arquero'
		},
		{
			name:     'Alexis',
			lastname: 'Sanchez',
			edad:     34,
			charge:   'Delantero'
		},
		{
			name:     'Arturo',
			lastname: 'Vidal',
			edad:     36,
			charge:   'Volante'
		},
		{
			name:     'Claudio',
			lastname: 'Bravo',
			edad:     38,
			charge:   'Arquero'
		},
		{
			name:     'Gary',
			lastname: 'Medel',
			edad:     34,
			charge:   'Defensa'
		},
		{
			name:     'Marcelo',
			lastname: 'Bielsa',
			edad:     60,
			charge:   'Director Tecnico'
		}
	];


	constructor() { }


	ngOnInit() {
	}


}
