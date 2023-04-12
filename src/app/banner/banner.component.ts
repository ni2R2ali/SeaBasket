import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  images = [
    `https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ovs76vmtL._SX3000_.jpg`,
    `https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61aURrton0L._SX3000_.jpg`,
    `https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jLjFXfkrL._SX3000_.jpg`,
    `https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61O759bS39L._SX3000_.jpg`,
  ];
term: any;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
