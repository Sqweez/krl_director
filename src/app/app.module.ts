import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, NavController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { PdfViewerPage } from "../pages/pdf-viewer/pdf-viewer";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PdfViewerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PdfViewerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}
