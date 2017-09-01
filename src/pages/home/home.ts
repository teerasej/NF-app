import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message = "...";

  constructor(public navCtrl: NavController) {

  }

  signUp(username, password, phone, birthDay) {
    // alert('OK ' + username);

    if( username == undefined 
        || password == undefined 
        || username == "" 
        || password == ""){
          
      this.message = "กรอก username และ password ด้วยจ้า";
    } else {
      this.message = "ขอบคุณที่ลงทะเบียน";
    }

    
  }

}
