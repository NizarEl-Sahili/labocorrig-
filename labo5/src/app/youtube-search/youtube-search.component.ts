import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GoogleService } from '../services/google.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const youtubeURL = "https://www.youtube.com/embed/";

@Component({
  selector: 'app-youtube-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './youtube-search.component.html',
  styleUrl: './youtube-search.component.css'
})
export class YoutubeSearchComponent {

  videoSearchText : string = "";
  videoId : string = "";
  videoUrl ?: SafeResourceUrl;

  constructor(public sanitizer : DomSanitizer, public google : GoogleService) { }

  ngOnInit() {
  }

  async searchVideo():Promise<void>{
    this.videoId = await this.google.searchVideoId(this.videoSearchText);
    this.getSafeUrl();
  }

  getSafeUrl() : void{
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeURL + this.videoId);
  }

}
