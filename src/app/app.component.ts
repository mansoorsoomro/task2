import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBXNWv7qOITlDY8sT3s0p0-_2KyXYWwCYY",
    authDomain: "task-ac317.firebaseapp.com",
    databaseURL: "https://task-ac317.firebaseio.com",
    projectId: "task-ac317",
    storageBucket: "",
    messagingSenderId: "271528660660",
    appId: "1:271528660660:web:31a97a08f9652e0e"
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
