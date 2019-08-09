import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  chats:any[]=[]; 
  constructor(public navCtrl: NavController) {
  	firebase.database().ref('data/').on('value', resp => {
  	  let detail=resp.val();
      console.log(detail);
      // var key = Object.keys(resp.val())[0]
      this.chats = snapshotToArray(resp);
       console.log(this.chats);
    });
  }

}

 export const snapshotToArray = snapshot => {
	    let returnArr = [];

	    snapshot.forEach(childSnapshot => {
	        let item = childSnapshot.val();
	        item.key = childSnapshot.key;
	        returnArr.push(item);
	    });

	    return returnArr;

	    console.log(returnArr);
	};
