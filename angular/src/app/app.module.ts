import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { NgModule } from '@angular/core';

// Theme
import { MaterialModule } from './shared/modules/material.module';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Third Party Modules
import { AgmCoreModule } from '@agm/core';

// Components
import { AppComponent } from './app.component';
import { AgmMapComponent } from './containers/agm-map/agm-map.component';
import { GameComponent } from './containers/game/game.component';
import { SlideComponent } from './components/slide/slide.component';
import { HomeComponent } from './containers/home/home.component';
import { RankingComponent } from './containers/ranking/ranking.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LayoutModule } from './layout/layout.module';

export const Components = [
  AppComponent,
  AgmMapComponent,
  GameComponent,
  SlideComponent,
  HomeComponent,
  RankingComponent
];
@NgModule({
  declarations: Components,
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    MaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
