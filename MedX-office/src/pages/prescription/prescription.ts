import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html',
})
export class PrescriptionPage {
  public form = {
    medicine : "",
    testsCount : 0,
    tests : new Array(),
    scansCount : 0,
    scans : new Array()
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
  }


  expand(){
    if(this.form.scansCount >=0 && this.form.testsCount >=0){
      this.form.tests  =new Array();
      this.form.scans =new Array();
      this.form.scans = Array.from({ length: this.form.scansCount }, () => " ");
    this.form.tests = Array.from({ length: this.form.testsCount }, () => "");
    console.log(this.form);
    }
    
  }

  submit(){
    console.log(this.form);
  }

}