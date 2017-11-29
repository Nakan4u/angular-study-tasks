import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.css']
})
export class CarouselNavigationComponent implements OnInit {
  private arrow: string;
  @Input('direction') direction: string;
  // @Output('navigate') navigate: any;
  @Output() navigate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.arrow = this.direction === 'next' ? '>' : '<';
  }

  onNavigate() {
    this.navigate.emit(this.direction);
  }

}
