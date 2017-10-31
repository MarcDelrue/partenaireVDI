import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Calendar } from '@ionic-native/calendar';
import { AgmCoreModule } from '@agm/core';
import { GoogleMaps } from '@ionic-native/google-maps';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LinksPage } from '../pages/links/links';
import { PhotosPage } from '../pages/photos/photos';
import { WorkshopPage } from '../pages/workshop/workshop';
import { ProfilPage } from '../pages/profil/profil';
import { JobsPage } from '../pages/jobs/jobs';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LinksPage,
    WorkshopPage,
    PhotosPage,
    ProfilPage,
    JobsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcqc3JLbyx9SnsM4HTWA3fgk35aIHb9lg',
      libraries: ["places"]
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LinksPage,
    WorkshopPage,
    PhotosPage,
    ProfilPage,
    JobsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
