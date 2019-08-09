import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class detailPage {
  value:any;
  liked:any;
  chats:any;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
  	this.value = navParams.get('item');
    this.liked = "false";
    console.log(this.value);
  }

  close(){
    this.navCtrl.pop();
  }

  senddata() {
    this.liked = "true";
    let newData = firebase.database().ref('data/').push();
    newData.set({
      Name:this.value.name,
      Url:this.value.url
    });
    //this.data.message = '';
  }

}
