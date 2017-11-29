import {
  Component,
  Input,
  Output,
  ContentChildren,
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
export class CarouselComponent implements AfterContentInit {
  private intervalId;
  private currentIndex: number = 0;
  public carouselItems: any;

  @Input('delay') delay: string;
  @ContentChildren(CarouselItemComponent) carouselContentItems: QueryList<CarouselItemComponent>;

  ngAfterContentInit() {
    this.carouselItems = this.carouselContentItems.toArray();
    this.intervalId = setInterval(() => {this.changeCarousel()}, +this.delay);
  }

  private changeCarousel() {
    let items: CarouselItemComponent[] = this.carouselItems;

    if (this.currentIndex > items.length) this.currentIndex = 0;
    items.forEach((item, i) => item.isHidden = this.currentIndex === i);
    this.currentIndex++;
  };

  OnDestroy() {
    this.intervalId.clearInterval()();
  }

  constructor() {}

  onNavigate(event) {
    if (event === 'next') {
      this.currentIndex++;
    } else if (event === 'prev') {
      this.currentIndex--;
    }
    this.changeCarousel();
  }

  navigateByIndex(index) {
    this.currentIndex = index;
    this.changeCarousel();
  }

}
