import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  
  // Cette liste a été transférée dans le DataService
  // characters : string[] = ["bebe","butters","clyde","craig","eric","kenny","kyle","nichole","stan","tolkien","wendy"];
  
  characterName : string = "";

  constructor(public data : DataService) { }

  ngOnInit() {
  }

}
