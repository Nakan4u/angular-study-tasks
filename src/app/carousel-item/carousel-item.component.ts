import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent{
  public isHidden: boolean = true;
}
