import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-resultado-heore',
  templateUrl: './resultado-heore.component.html',
  styles: []
})
export class ResultadoHeoreComponent implements OnInit {
  heroes: Heroe[];
  constructor( private activatedRoute: ActivatedRoute,
              private _HeroesService: HeroesService,
              private _route: Router) {
     // Regresa un observador
    // Regresa un objeto con STRINGS de los parametros
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._HeroesService.buscarHeroes( params['termino']);
    });
  }

  verHeroe( idx: Number ) {
    this._route.navigate(['/heroe', idx]);
  }

}
