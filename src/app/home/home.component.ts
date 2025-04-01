import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  bestProducts = [
    {
      name: 'FS - QUILTED MAXI CROSS BAG',
      finalPrice: '$299,43',
      price: '$534,33',
      discount: '24% Off',
      image: environment.r2Cloudflare + '/product-1.png',
      bg: '#e0e0e0'
    },
    {
      name: 'FS - Nike Air Max 270 React...',
      finalPrice: '$299,43',
      price: '$534,33',
      discount: '24% Off',
      image: environment.r2Cloudflare + '/product-2.png',
      bg: '#e5e5e5'
    },
    {
      name: 'FS - Nike Air Max 270 React...',
      finalPrice: '$299,43',
      price: '$534,33',
      discount: '24% Off',
      image: environment.r2Cloudflare + '/product-3.png',
      bg: '#e0e0e0'
    },
  ]
}
