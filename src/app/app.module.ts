import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselNavigationComponent } from './carousel-navigation/carousel-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemComponent,
    CarouselNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
