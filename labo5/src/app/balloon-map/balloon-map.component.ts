import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-balloon-map',
  standalone: true,
  imports: [GoogleMapsModule, FormsModule, CommonModule],
  templateUrl: './balloon-map.component.html',
  styleUrl: './balloon-map.component.css'
})
export class BalloonMapComponent {

  inputLat : number = 0;
  inputLng : number = 0;

  center : google.maps.LatLngLiteral = {lat: 42, lng: -4};
  zoom : number = 2;

  markerPositions : google.maps.LatLngLiteral[] = [
    {lat: 42, lng: -4}
  ];

  constructor() { }

  ngOnInit() {
  }

  addBalloon() : void {
    this.markerPositions.push({lat: this.inputLat, lng : this.inputLng});
  }

  clearBalloons() : void {
    this.markerPositions = [];
  }

}
