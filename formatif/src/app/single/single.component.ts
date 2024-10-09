import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokeapiService } from '../services/pokeapi.service';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ListComponent } from '../list/list.component';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  pokemonname: string | null = null;
  pokemonDetail: Pokemon | null = null;

  constructor(public route: ActivatedRoute, public pokeApi: PokeapiService, public http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.pokemonname = this.route.snapshot.paramMap.get("name");
    if (this.pokemonname) {
      this.pokemonDetail = await this.pokeApi.getSinglePkmn(this.pokemonname);
    }

  }
  AddtoFavorites() {
    if (this.pokemonDetail) {
      const favourites = this.getFavourites()
      favourites.push(this.pokemonDetail)
      localStorage.setItem("favourites", JSON.stringify(favourites))
    }
  }
  getFavourites(): Pokemon[] {
    const favourites = localStorage.getItem("favourites")
    return favourites ? JSON.parse(favourites) : []
  }
}
