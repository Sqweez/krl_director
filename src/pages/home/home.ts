import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {SplashScreen} from "@ionic-native/splash-screen";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 /* something: any;
  data: any;
  url: string = 'http://kazroadlab.kad.org.kz/mp/index1.php';*/
  constructor(public navCtrl: NavController, public iab: InAppBrowser, public splashScreen: SplashScreen) {
    splashScreen.hide();
/*
    this.openBrowser();
*/
  }
  ionViewDidLoad(){

  }



}
