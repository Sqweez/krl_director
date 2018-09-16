import {Component} from '@angular/core';
import {ModalController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {PdfViewerPage} from "../pages/pdf-viewer/pdf-viewer";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  /*
    rootPage:any = HomePage;
  */
  splashScreen: SplashScreen;
  platform: Platform;
  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public iab: InAppBrowser,
              public modalCtrl: ModalController) {
    platform.ready().then(() => {
      this.splashScreen = splashScreen;
      this.platform = platform;
      statusBar.styleDefault();
      splashScreen.show();
      this.openBrowser();
    });
  }
  openBrowser() {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      hideurlbar: 'yes',
      location: 'no',
      hardwareback: 'yes'
    };
    const browser = this.iab.create('http://kazroadlab.kad.org.kz/', '_blank', options);
    browser.on('exit').subscribe(e => {
      this.platform.exitApp();
    });

    browser.on('loadstart').subscribe(event => {
      if(event.url.indexOf(".pdf") === event.url.length-4){
        browser.hide();
        let modal = this.modalCtrl.create(PdfViewerPage, {
          displayData: {
            pdfSource: {
              url: event.url
            }
          }
        });
        modal.onDidDismiss(() => {
          browser.show();
        });
        modal.present();
      }
    });

    browser.on('loadstop').subscribe(event => {
      this.splashScreen.hide();
      browser.insertCSS({
        code:
        ".login-text, " +
        ".login-link-forgot-pass {display:none;} " +
        "body { " +
        "min-height: 0; " +
        "min-weight: 0; } " +
        "#login-popup-wrap {" +
        "width: 100%;" +
        "}#login-popup {" +
        "width: auto;" +
        "margin: 0 10px;" +
        "}" +
        ".login-inp {" +
        "height: 100px; font-size: 38px} .login-btn { height: 50px; width: 252px;"
      });
    });
  }
}

