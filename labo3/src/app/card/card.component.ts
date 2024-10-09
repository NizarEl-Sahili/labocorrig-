import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone:true,
  imports:[RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // @Input qui reçoit le nom d'un personnage donné par le composant list
  @Input() characterName : string = "";

  constructor() { }

  ngOnInit() {
  }


}
