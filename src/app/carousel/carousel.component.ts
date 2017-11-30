import {
  Component,
  Input,
  Output,
  ContentChildren,
  ViewChildren,
  AfterContentInit,
  AfterViewInit,
  QueryList
} from '@angular/core';

import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
// import { setInterval } from 'timers';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit, AfterViewInit {
  private intervalId;
  private currentIndex: number = 1;
  private carouselItems: CarouselItemComponent[] = [];

  @Input('delay') delay: string;
  @ContentChildren(CarouselItemComponent) carouselContentItems: QueryList<CarouselItemComponent>;
  @ViewChildren(CarouselItemComponent) carouselViewItems: QueryList<CarouselItemComponent>;

  ngAfterContentInit() {
    console.log('carouselContentItems', this.carouselContentItems.toArray());
  }

  ngAfterViewInit() {
    console.log('carouselViewItems', this.carouselViewItems.toArray());
    setTimeout(() => { // fixing `ExpressionChangedAfterItHasBeenCheckedError` error 
      this.carouselItems = this.carouselContentItems.toArray().concat(this.carouselViewItems.toArray()); // merge content and view items;
      this.carouselItems[0].isHidden = false; //set first item visible by default;
      this.intervalId = setInterval(() => { this.changeCarousel(false) }, +this.delay);
    });
  }

  private changeCarousel(isManual) {
    let items: CarouselItemComponent[] = this.carouselItems;

    if (!isManual) this.currentIndex++;

    if (this.currentIndex > items.length) this.currentIndex = 1;
    else if (this.currentIndex === 0) this.currentIndex = items.length;

    items.forEach((item, i) => item.isHidden = this.currentIndex !== i + 1);
  };

  OnDestroy() {
    this.intervalId.clearInterval()();
  }

  constructor() { }

  onNavigate(event) {
    if (event === 'next') {
      this.currentIndex++;
    } else if (event === 'prev') {
      this.currentIndex--;
    }
    this.changeCarousel(true);
  }

  navigateByIndex(index) {
    this.currentIndex = index;
    this.changeCarousel(false);
  }

}
