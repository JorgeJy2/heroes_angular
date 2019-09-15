import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultadoHeoreComponent } from './components/resultado-heore/resultado-heore.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'resultado/:termino', component: ResultadoHeoreComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// UseHasis for use a old sersion whit # in path {useHash:true}
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
