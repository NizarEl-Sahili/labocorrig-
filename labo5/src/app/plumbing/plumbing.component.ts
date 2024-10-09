import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SpecialPipe } from '../pipes/special.pipe';

@Component({
  selector: 'app-plumbing',
  standalone: true,
  imports: [DatePipe, SpecialPipe],
  templateUrl: './plumbing.component.html',
  styleUrl: './plumbing.component.css'
})
export class PlumbingComponent {

  maDate : string = "2021-11-15";

  constructor() { }

  ngOnInit() {
  }

}
