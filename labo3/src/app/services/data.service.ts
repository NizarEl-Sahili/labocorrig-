import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Cette liste était dupliquée dans les composants index et list. Elle a été rapatriée ici.
  characters : string[] = ["bebe","butters","clyde","craig","eric","kenny","kyle","nichole","stan","tolkien","wendy"];

  constructor(public http : HttpClient) { }

  // La requête qui était dans le composant details a été déplacée ici. Le Character créé est retourné
  async searchCharacter(name : string) : Promise<Character>{
    let x = await lastValueFrom(this.http.get<any>("https://spapi.dev/api/characters?search=" + name));
    console.log(x);
    return new Character(x.data[0].name, x.data[0].age, x.data[0].occupation, x.data[0].grade, x.data[0].episodes.length);
  }
}
