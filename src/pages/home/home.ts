import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ModalController } from 'ionic-angular';
import { detailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  films:Observable<any>;	
  pokimon_data:any;
  item_data:any;
  constructor(public navCtrl: NavController,private http: HttpClient,public modalCtrl: ModalController) {
  	this.films = this.http.get('https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150');
    this.films.subscribe(data => {
      console.log('my data: ', data.results);
      this.pokimon_data = data.results;
    })
  }

  presentModal($item) {
    const modal = this.modalCtrl.create(detailPage,{item:$item});
    modal.present();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.pokimon_data = this.pokimon_data.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
