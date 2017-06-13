import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { CarouselContainerComponent } from './carousel-container.component';
import { CarouselImageComponent } from './carousel-image.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CarouselContainerComponent,
    CarouselImageComponent
  ],
  exports: [
    CarouselContainerComponent,
    CarouselImageComponent
  ]
})

export class CarouselModule { }