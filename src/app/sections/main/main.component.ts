import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  	selector:    'app-main',
  	templateUrl: './main.component.html',
  	styleUrls:   ['./main.component.scss'],
	standalone:  true
})



export class MainComponent  implements OnInit {


	constructor() {
		
	}


	ngOnInit() {
		
		// const swiper = new Swiper('.swiper', {
			
		// 	direction: 'horizontal',
		// 	effect: 'cube',
		// 	loop: true,
		// 	slidesPerView: 1,
		// 	navigation: {
		// 		nextEl: '.swiper-button-next',
		// 		prevEl: '.swiper-button-prev',
		// 	},
		// 	breakpoints: {
		// 		// when window width is >= 768px
		// 		768: {
		// 			direction: 'vertical',
		// 		}
		// 	},
		// 	pagination: {
		// 		el: '.swiper-pagination',
		// 		type: 'fraction',
		// 	}

		// });

	}


}
