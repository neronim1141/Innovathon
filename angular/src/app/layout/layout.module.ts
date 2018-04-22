import { NgModule } from '@angular/core';

// Theme
import { MaterialModule } from '../shared/modules/material.module';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';

const Components = [HeaderComponent, FooterComponent, NavigationComponent];

@NgModule({
  declarations: Components,
  imports: [AppRoutingModule, MaterialModule],
  exports: Components
})
export class LayoutModule {}
