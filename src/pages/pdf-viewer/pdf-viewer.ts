import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the PdfViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdf-viewer',
  templateUrl: 'pdf-viewer.html',
})
export class PdfViewerPage {
  displayData: any = {};
  loader: any;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController) {
  }
  onClose(): void {
    this.viewCtrl.dismiss({});
  }
  callBackFn(e){
    this.loader.dismiss();
  }

  ionViewDidLoad() {
    this.loader = this.loadingCtrl.create({
      content: "Пожалуйста, подождите...",
      duration: 100000
    });
    this.loader.present();
    this.displayData = this.navParams.get('displayData');
  }

}
