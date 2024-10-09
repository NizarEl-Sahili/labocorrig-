import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  favorites: Pokemon[] = [

  ];

  constructor() { }

  ngOnInit() {
    this.loadFavurites()
  }
  loadFavurites() {
    const favourites = localStorage.getItem("favourites")
    this.favorites = favourites ? JSON.parse(favourites) : []
  }

}
