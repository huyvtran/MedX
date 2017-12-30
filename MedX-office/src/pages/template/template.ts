import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class TemplatePage {
  public form = {
    WBC: 0 ,
    RBC: 0 ,
    hemoglobin: 0,
    hematocrit: 0,
    MCV: 0,
    MCH: 0,
    MCHC: 0,
    RDW: 0,
    PC: 0,
    MPV: 0
  }
  public name = "";

  public submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplatePage');
  }

  submitRequest(requestForm: NgForm){
    this.submitted = true;
    if(requestForm.valid){
      console.log('submited');
    }
    
  }

}