import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import { HousingLocation } from '../housinglocation';
import {RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})

export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
