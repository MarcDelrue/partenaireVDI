import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  user = {
    first_name: '',
    last_name: '',
    adress: '',
    email: '',
    phone: '',
    description: ''
  }

  constructor(public navCtrl: NavController) {
  }
}
