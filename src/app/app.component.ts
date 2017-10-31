import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { LinksPage } from '../pages/links/links';
import { PhotosPage } from '../pages/photos/photos';
import { WorkshopPage } from '../pages/workshop/workshop';
import { ProfilPage } from '../pages/profil/profil';
import { JobsPage } from '../pages/jobs/jobs';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = ProfilPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToWorkshop(){
    this.nav.setRoot(WorkshopPage);
  }

  goToProfil(){
    this.nav.setRoot(ProfilPage);
  }

  goToLinks(){
    this.nav.setRoot(LinksPage);
  }

  goToLogin(){
    this.nav.setRoot(LoginPage);
  }

  goToPhotos(){
    this.nav.setRoot(PhotosPage);
  }

  goToJobs(){
    this.nav.setRoot(JobsPage);
  }
}
