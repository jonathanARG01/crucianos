import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { FormsModule       } from '@angular/forms';
import { IonicModule       } from '@ionic/angular';
import { NavbarComponent   } from 'src/app/components/navbar/navbar.component';



@Component({
    selector:    'app-contact',
    templateUrl: './contact.page.html',
    styleUrls:   ['./contact.page.scss'],
    standalone:  true,
	imports:     [IonicModule, CommonModule, FormsModule, NavbarComponent]
})



export class ContactPage implements OnInit {


	constructor() { }


	ngOnInit() {
	}


}
