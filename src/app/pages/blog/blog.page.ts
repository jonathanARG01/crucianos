import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { FormsModule       } from '@angular/forms';
import { IonicModule       } from '@ionic/angular';
import { NavbarComponent   } from 'src/app/components/navbar/navbar.component';



@Component({
  	selector:    'app-blog',
  	templateUrl: './blog.page.html',
  	styleUrls:   ['./blog.page.scss'],
  	standalone:  true,
	imports:     [IonicModule, CommonModule, FormsModule, NavbarComponent]
})



export class BlogPage implements OnInit {


	constructor() { }


	ngOnInit() {
	}


}
