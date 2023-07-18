import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';



@Component({
  	selector: 'app-person',
  	templateUrl: './person.component.html',
  	styleUrls: ['./person.component.scss'],
	standalone: true,
	imports: [IonicModule]
})



export class PersonComponent  implements OnInit {


	@Input() person!: any;


	constructor() { }


	ngOnInit() {}


}
