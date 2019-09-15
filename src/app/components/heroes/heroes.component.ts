import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor( private _heroesServices: HeroesService,
              private _route: Router) {}
 /* Página lista
 This function return Interface Heroes in array */
  ngOnInit() {
      this.heroes = this._heroesServices.getHeroes();
  }
  verHeroe(idx: number) {
    this._route.navigate(['/heroe', idx]);
  }
}
