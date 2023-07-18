import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  	selector:    'app-main',
  	templateUrl: './main.component.html',
  	styleUrls:   ['./main.component.scss'],
	standalone:  true,
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})



export class MainComponent  implements OnInit {


	@ViewChild('swiper') swiperRef: ElementRef | undefined;


	constructor() {
		
	}


	ngOnInit() {
		
	}


}
