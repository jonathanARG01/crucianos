// Angular
import { Component, OnInit } from '@angular/core';
import { IonicModule       } from '@ionic/angular';

// Components
import { MatchComponent } from 'src/app/components/match/match.component';



@Component({
  	selector:    'app-next',
  	templateUrl: './next.component.html',
  	styleUrls:   ['./next.component.scss'],
	standalone:  true,
	imports:     [IonicModule, MatchComponent]
})



export class NextComponent  implements OnInit {


	constructor() { }


	ngOnInit() {}


}
