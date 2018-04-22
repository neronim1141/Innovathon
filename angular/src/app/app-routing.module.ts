import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from './components/slide/slide.component';
import { GameComponent } from './containers/game/game.component';
import { AgmMapComponent } from './containers/agm-map/agm-map.component';
import { HomeComponent } from './containers/home/home.component';
import { RankingComponent } from './containers/ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'map',
    component: AgmMapComponent
  },
  {
    path: 'slide',
    component: GameComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
