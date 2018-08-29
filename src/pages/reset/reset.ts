import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  email;
 

  // submitAttempt: boolean = false;
  loading: any;
  human = {

    email: "",

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
   

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }


  resetPassword() {
 

    var auth = firebase.auth();
    var emailAddress = this.email;

    auth.sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
      this.navCtrl.push("HomePage");
    }).catch(function (error) {
      // An error happened.
     
    });
  }
}

    // if (!this.email.valid){
    //   console.log(this.email);
    // } else {
    //   firebase.auth().resetPassword(this.email).then( user => {
    //     this.navCtrl.setRoot("HomePage");
    //   }, error => {
    //     this.loading.dismiss().then( () => {
    //       let alert = this.alertCtrl.create({
    //         message: error.message,
    //         buttons: [
    //           {
    //             text: "Ok",
    //             role: 'cancel'
    //           }
    //         ]
    //       });
    //       alert.present();
    //     });
    //   });

    //   this.loading = this.loadingCtrl.create({
    //     dismissOnPageChange: true,
    //   });
    //   this.loading.present();
    // }


