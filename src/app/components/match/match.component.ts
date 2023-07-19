import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';



@Component({
  	selector: 'app-match',
  	templateUrl: './match.component.html',
  	styleUrls: ['./match.component.scss'],
	standalone:  true,
	imports:     [IonicModule]
})



export class MatchComponent  implements OnInit {


	constructor() { }


	ngOnInit() {}


}
