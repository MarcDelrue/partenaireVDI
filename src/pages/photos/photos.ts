import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html'
})
export class PhotosPage {
  arrayImg = ['assets/img/selfie.jpg','assets/img/selfie.jpg','assets/img/selfie.jpg','assets/img/selfie.jpg','assets/img/selfie.jpg'];
  constructor(public navCtrl: NavController) {
  }
}
