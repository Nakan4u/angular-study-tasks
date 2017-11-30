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
  private currentIndex: number = 1;
  public carouselItems: any;

  @Input('delay') delay: string;
  @ContentChildren(CarouselItemComponent) carouselContentItems: QueryList<CarouselItemComponent>;

  ngAfterContentInit() {
    this.carouselItems = this.carouselContentItems.toArray();
    this.intervalId = setInterval(() => {this.changeCarousel(false)}, +this.delay);

    this.carouselItems[0].isHidden = false; //set first item visible by default;
  }

  private changeCarousel(isManual) {
    let items: CarouselItemComponent[] = this.carouselItems;

    if(!isManual) this.currentIndex++;

    if (this.currentIndex > items.length) this.currentIndex = 1;
    else if (this.currentIndex === 0) this.currentIndex = items.length;

    items.forEach((item, i) => item.isHidden = this.currentIndex !== i + 1);
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
    this.changeCarousel(true);
  }

  navigateByIndex(index) {
    this.currentIndex = index;
    this.changeCarousel(false);
  }

}
