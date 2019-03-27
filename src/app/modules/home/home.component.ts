import { Component, OnInit } from '@angular/core';

class Country {
  constructor(public name: string) { }
}

const europianCountries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
  'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy',
  'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia',
  'Slovenia', 'Spain', 'Sweden', 'United Kingdom'];

@Component({
  // moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public countries: Array<Country>;

  constructor() {
    this.countries = [];

    for (let i = 0; i < europianCountries.length; i++) {
      this.countries.push(new Country(europianCountries[i]));
    }
  }

  public onItemTap(args) {
    console.log('Item Tapped at cell index: ' + args.index);
  }
}
