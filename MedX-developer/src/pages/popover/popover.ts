import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';

declare var require: any;
var CATEGORIES = require('../new/categories.json');

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  private categories: any = [];
  private subcategories: any = [];
  private callback: any;
  private selectedCategory=null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public popoverCtrl: PopoverController
  ) {
    this.categories = CATEGORIES['categories'];
    this.callback = this.navParams.get('callback');
  }

  ionViewDidLoad() {
  }

  presentPopover(category) {
    this.selectedCategory = category;
    this.subcategories = CATEGORIES[category];
  }

  get(category) {
    this.callback(category);
    this.close();
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
