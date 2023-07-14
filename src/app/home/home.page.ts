import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public latitud_promesa:number = 0;
  public longitud_promesa:number = 0;
  public latitud_observable:number = 0;
  public longitud_observable:number = 0;
  constructor() {
  }

  getPosition():void{
    Geolocation.getCurrentPosition()
      .then(res =>{
        console.log(res.coords.latitude, res.coords.longitude);
        this.latitud_promesa = res.coords.latitude;
        this.longitud_promesa = res.coords.longitude;
      })
  }

  watchPosition():void{
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
    Geolocation.watchPosition(options, res =>{
      if (res?.coords.latitude != undefined && res?.coords.longitude != undefined) {
        this.latitud_observable = res.coords.latitude;
        this.longitud_observable = res.coords.longitude;
      }
    });

  }
}
