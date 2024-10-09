import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  inputPkmn: string = "";

  constructor(public pokeApi: PokeapiService, public router: Router) { }

  ngOnInit() {
    this.pokeApi.getPkmnList();
  }


}
