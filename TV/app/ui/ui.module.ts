import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search/search-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    NavBarComponent,
    SearchBarComponent,
    FooterComponent
  ],
  exports: [
    NavBarComponent,
    SearchBarComponent,
    FooterComponent
  ]
})

export class UIModule {}
