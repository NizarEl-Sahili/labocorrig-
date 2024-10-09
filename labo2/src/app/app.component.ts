import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  result = false;

  artist : string = "";
  similarArtists : string[] = [];

  constructor(public httpClient : HttpClient){}

  async searchArtist():Promise<void>{
    this.result = true;

    let x = await lastValueFrom(this.httpClient.get<any>("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" + this.artist + "&api_key=e34ebf8561ba7c653a21d1d99a1a0070&format=json"));
    console.log(x);
	this.similarArtists = [];
    for(let i = 0; i < x.similarartists.artist.length; i++){
      this.similarArtists.push(x.similarartists.artist[i].name);
    }
  }

  newSearch():void{
    this.result = false;
  }

}
