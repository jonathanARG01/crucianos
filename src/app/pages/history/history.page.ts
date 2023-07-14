import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { FormsModule       } from '@angular/forms';
import { IonicModule       } from '@ionic/angular';
import { NavbarComponent   } from 'src/app/components/navbar/navbar.component';



@Component({
    selector:    'app-history',
    templateUrl: './history.page.html',
    styleUrls:   ['./history.page.scss'],
    standalone:  true,
    imports:     [IonicModule, CommonModule, FormsModule, NavbarComponent]
})



export class HistoryPage implements OnInit {


	constructor() { }


	ngOnInit() {
	}


}
